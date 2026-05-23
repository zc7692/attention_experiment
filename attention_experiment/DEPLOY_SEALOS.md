# Sealos DevBox 上线指南

这份指南对应当前实验网页的正式收数版，目标是用 Sealos DevBox 完成开发、发布和上线，并获得一个别人可以直接打开的公网链接。

官方文档：

- DevBox Overview: https://sealos.io/docs/guides/devbox/
- Create a Project: https://sealos.io/docs/guides/devbox/create-a-project/
- Deploy: https://sealos.io/docs/guides/devbox/deploy/

## 为什么走 DevBox

DevBox 是 Sealos 的云端开发环境，官方文档明确写了它支持从开发环境直接发布 OCI 镜像，再一键部署到 Sealos Cloud。对于你现在这个实验，优点是：

- 不用在本地装 Docker
- 不用自己折腾本地镜像构建
- 能直接从云端开发环境发布
- 适合正式收数

## 你需要准备什么

1. 一个 Sealos 账号
2. 一个 DevBox 项目
3. 这套实验代码

当前项目已经有这些关键文件：

- `server.py`
- `entrypoint.sh`
- `requirements.txt`
- `index.html`
- `app.js`
- `styles.css`

## 步骤一：创建 DevBox 项目

1. 打开 Sealos。
2. 进入 DevBox。
3. 新建一个项目。
4. 选择 Python 环境。

## 步骤二：把代码放进 DevBox

把当前 `attention_experiment` 目录里的文件上传或同步到 DevBox 项目中。

建议保留这些文件在项目根目录：

- `entrypoint.sh`
- `server.py`
- `requirements.txt`
- `index.html`
- `app.js`
- `styles.css`
- `data/.gitkeep`

## 步骤三：配置启动脚本

DevBox 官方文档说明，发布前要配置 `entrypoint.sh`，它会作为 release 的启动脚本。

当前这个项目已经给你准备好了：

```sh
#!/usr/bin/env sh
set -eu

export HOST="${HOST:-0.0.0.0}"
export PORT="${PORT:-8000}"
export DATA_DIR="${DATA_DIR:-/data}"

exec python server.py
```

## 步骤四：设置开发环境变量

建议在 DevBox 里设置：

```text
HOST=0.0.0.0
PORT=8000
DATA_DIR=/data
```

## 步骤五：挂载持久化存储

正式收数一定要挂载持久化存储。

建议把存储挂载到：

```text
/data
```

这样正式实验数据会写到：

```text
/data/submissions.jsonl
```

## 步骤六：先在 DevBox 里跑通

在 DevBox 终端里运行：

```text
python server.py
```

然后打开 DevBox 给你的预览地址，确认：

1. 首页能打开
2. 能进入实验
3. 能提交问卷

## 步骤七：创建 Release

按官方流程，在 DevBox 里创建 release，把当前代码打包成 OCI 镜像。

## 步骤八：Deploy 到 Sealos Cloud

在 release 页面点击 deploy，等待部署完成。

部署成功后，Sealos 会给你一个公网 URL，别人可以直接打开这个链接。

## 你最终只要记住这条线

`DevBox 项目 -> 配置 entrypoint.sh -> Release -> Deploy -> 公网链接`
