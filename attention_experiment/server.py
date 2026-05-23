from __future__ import annotations

import json
import os
import secrets
from datetime import datetime
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parent
DATA_DIR = Path(os.getenv("DATA_DIR", str(ROOT / "data")))
SUBMISSION_FILE = DATA_DIR / "submissions.jsonl"
HOST = os.getenv("HOST", "0.0.0.0")
PORT = int(os.getenv("PORT", "8000"))

REQUIRED_TOP_LEVEL_FIELDS = {
    "sessionId",
    "participant",
    "condition",
    "durationSeconds",
    "startedAt",
    "endedAt",
    "summary",
    "survey",
    "eventLog",
    "technical",
    "qualityFlags",
}

REQUIRED_SURVEY_FIELDS = {
    "fit",
    "autopilot",
    "control",
    "switching",
    "timeDistortion",
    "perceivedStrength",
    "fatigue",
    "attentionCheck",
    "interruption",
    "memory",
}


def generate_receipt_code() -> str:
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    return f"AT-{timestamp}-{secrets.token_hex(2).upper()}"


class ExperimentHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, format: str, *args) -> None:
        return

    def _send_json(self, payload: dict, status: HTTPStatus = HTTPStatus.OK) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def _bad_request(self, message: str) -> None:
        self._send_json({"ok": False, "error": message}, status=HTTPStatus.BAD_REQUEST)

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path == "/api/ping":
            self._send_json({"ok": True, "time": datetime.now().isoformat()})
            return
        return super().do_GET()

    def do_POST(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path != "/api/submit":
            self._send_json({"ok": False, "error": "unknown endpoint"}, status=HTTPStatus.NOT_FOUND)
            return

        length = int(self.headers.get("Content-Length", "0"))
        if length <= 0:
            self._bad_request("empty body")
            return

        raw = self.rfile.read(length)
        try:
            payload = json.loads(raw.decode("utf-8"))
        except json.JSONDecodeError:
            self._bad_request("invalid json")
            return

        if not isinstance(payload, dict):
            self._bad_request("payload must be an object")
            return

        missing = REQUIRED_TOP_LEVEL_FIELDS - set(payload.keys())
        if missing:
            self._bad_request(f"missing top-level fields: {', '.join(sorted(missing))}")
            return

        survey = payload.get("survey")
        if not isinstance(survey, dict):
            self._bad_request("survey must be an object")
            return

        missing_survey = REQUIRED_SURVEY_FIELDS - set(survey.keys())
        if missing_survey:
            self._bad_request(f"missing survey fields: {', '.join(sorted(missing_survey))}")
            return

        if not isinstance(payload.get("eventLog"), list):
            self._bad_request("eventLog must be an array")
            return

        receipt_code = generate_receipt_code()
        DATA_DIR.mkdir(parents=True, exist_ok=True)
        record = {
            "receivedAt": datetime.now().isoformat(),
            "receiptCode": receipt_code,
            "client": self.client_address[0],
            "payload": payload,
        }

        with SUBMISSION_FILE.open("a", encoding="utf-8") as f:
            f.write(json.dumps(record, ensure_ascii=False) + "\n")

        self._send_json(
            {
                "ok": True,
                "receiptCode": receipt_code,
                "savedTo": SUBMISSION_FILE.name,
            }
        )


def main() -> None:
    server = ThreadingHTTPServer((HOST, PORT), ExperimentHandler)
    print(f"Attention experiment server running at http://{HOST}:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
