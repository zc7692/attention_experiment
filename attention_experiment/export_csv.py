from __future__ import annotations

import csv
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parent
DATA_DIR = ROOT / "data"
SOURCE = DATA_DIR / "submissions.jsonl"
TARGET = DATA_DIR / "submissions_export.csv"


def flatten_record(record: dict) -> dict:
    payload = record.get("payload", {})
    participant = payload.get("participant", {})
    summary = payload.get("summary", {})
    survey = payload.get("survey", {})
    quality_flags = payload.get("qualityFlags", {})
    technical = payload.get("technical", {})
    device = technical.get("device", {})

    return {
        "receivedAt": record.get("receivedAt", ""),
        "receiptCode": record.get("receiptCode", ""),
        "sessionId": payload.get("sessionId", ""),
        "condition": payload.get("condition", ""),
        "durationSeconds": payload.get("durationSeconds", ""),
        "participantCode": participant.get("participantCode", ""),
        "ageGroup": participant.get("ageGroup", ""),
        "gender": participant.get("gender", ""),
        "startedAt": payload.get("startedAt", ""),
        "endedAt": payload.get("endedAt", ""),
        "cardsSeen": summary.get("cardsSeen", ""),
        "cardsOpened": summary.get("cardsOpened", ""),
        "bookmarks": summary.get("bookmarks", ""),
        "clicks": summary.get("clicks", ""),
        "activeElapsedSeconds": summary.get("activeElapsedSeconds", ""),
        "inactiveElapsedSeconds": summary.get("inactiveElapsedSeconds", ""),
        "categoryConcentration": summary.get("categoryConcentration", ""),
        "eventCount": summary.get("eventCount", ""),
        "surveySeconds": summary.get("surveySeconds", ""),
        "fit": survey.get("fit", ""),
        "autopilot": survey.get("autopilot", ""),
        "control": survey.get("control", ""),
        "switching": survey.get("switching", ""),
        "timeDistortion": survey.get("timeDistortion", ""),
        "perceivedStrength": survey.get("perceivedStrength", ""),
        "fatigue": survey.get("fatigue", ""),
        "attentionCheck": survey.get("attentionCheck", ""),
        "interruption": survey.get("interruption", ""),
        "memory": survey.get("memory", ""),
        "focusPattern": survey.get("focusPattern", ""),
        "attentionCheckFailed": quality_flags.get("attentionCheckFailed", ""),
        "highHiddenRatio": quality_flags.get("highHiddenRatio", ""),
        "lowEngagement": quality_flags.get("lowEngagement", ""),
        "surveyTooFast": quality_flags.get("surveyTooFast", ""),
        "mobileDevice": quality_flags.get("mobileDevice", ""),
        "viewportTooSmall": quality_flags.get("viewportTooSmall", ""),
        "interruptedSelfReport": quality_flags.get("interruptedSelfReport", ""),
        "repeatedFullscreenExit": quality_flags.get("repeatedFullscreenExit", ""),
        "viewportWidth": device.get("viewportWidth", ""),
        "viewportHeight": device.get("viewportHeight", ""),
        "language": device.get("language", ""),
        "timezone": technical.get("timezone", ""),
    }


def main() -> None:
    if not SOURCE.exists():
      raise FileNotFoundError(f"未找到收数文件：{SOURCE}")

    rows = []
    with SOURCE.open("r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            rows.append(flatten_record(json.loads(line)))

    if not rows:
        raise ValueError("收数文件为空，暂无可导出的记录。")

    TARGET.parent.mkdir(parents=True, exist_ok=True)
    fieldnames = list(rows[0].keys())
    with TARGET.open("w", encoding="utf-8-sig", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    print(f"导出完成：{TARGET}")


if __name__ == "__main__":
    main()
