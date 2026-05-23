# 推送镜像到 Docker Hub

下面这套步骤适合把当前实验网页打包成镜像，并推到 Docker Hub，后续再交给 Sealos 部署。

## 第一步：确认你本机已经安装

1. Docker Desktop
2. 一个 Docker Hub 账号

## 第二步：登录 Docker Hub

打开终端后执行：

```powershell
docker login
```

系统会提示你输入：

- Docker Hub 用户名
- Docker Hub 密码或 Access Token

如果显示 `Login Succeeded`，说明登录成功。

## 第三步：进入项目目录

```powershell
cd C:\Users\gjm15\Documents\Codex\2026-05-18\files-mentioned-by-the-user-ai\attention_experiment
```

## 第四步：构建镜像

把下面的 `你的用户名` 换成你自己的 Docker Hub 用户名：

```powershell
docker build -t 你的用户名/attention-experiment:latest .
```

例如：

```powershell
docker build -t zhangsan/attention-experiment:latest .
```

构建成功后，可以执行：

```powershell
docker images
```

看看本地是否已经出现这条镜像。

## 第五步：本地先试跑一次

```powershell
docker run --rm -p 8000:8000 -e HOST=0.0.0.0 -e PORT=8000 -e DATA_DIR=/app/data 你的用户名/attention-experiment:latest
```

然后在浏览器打开：

```text
http://127.0.0.1:8000
```

如果首页能正常打开，就说明镜像没问题。

## 第六步：推送到 Docker Hub

```powershell
docker push 你的用户名/attention-experiment:latest
```

推送完成后，你在 Docker Hub 上会看到一个公开镜像地址，例如：

```text
你的用户名/attention-experiment:latest
```

## 第七步：在 Sealos 填写镜像地址

进入 Sealos 的 App Launchpad 新建应用时，在镜像地址里直接填：

```text
你的用户名/attention-experiment:latest
```

然后再配置：

```text
HOST=0.0.0.0
PORT=8000
DATA_DIR=/data
```

并把持久化存储挂载到：

```text
/data
```

## 如果你后面修改了网页代码

每次更新后，重复这三步：

```powershell
docker build -t 你的用户名/attention-experiment:latest .
docker push 你的用户名/attention-experiment:latest
```

然后回到 Sealos 重新部署或重启应用即可。
