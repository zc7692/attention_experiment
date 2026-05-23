# 注意力与算法强度行为实验平台

这是适合正式收数的实验版本，用于研究“推荐算法强度”对用户注意力分配、持续浏览倾向、主观时间知觉和自主控制感的影响。

## 这个正式版已经补齐了什么

- 知情同意、成年确认和电脑端作答约束
- 20 分钟有效浏览时长
- 页面失焦自动暂停并记录离开时长
- 完成码回执
- 问卷注意力检查题和数据质量标记
- 更完整的行为日志与设备信息
- 本地 JSON 收数与 CSV 导出

## 文件结构

- `index.html`：正式实验主界面
- `styles.css`：界面样式
- `app.js`：实验逻辑、随机分组、计时控制、行为记录与问卷提交
- `server.py`：实验服务器，负责托管页面和保存提交数据
- `export_csv.py`：将 `jsonl` 收数文件转换为 `csv`
- `Dockerfile`：用于部署到公网服务器
- `Procfile`：用于常见托管平台的一键运行
- `render.yaml`：Render 部署配置
- `runtime.txt`：Python 版本声明
- `data/submissions.jsonl`：正式实验提交数据

## 本地启动

```powershell
python server.py
```

然后访问：

```text
http://127.0.0.1:8000
```

## 正式收数建议

1. 独立完成实验，不与其他任务并行。
2. 在安静环境下完成，不频繁切走页面。
3. 使用统一说明语，避免研究者临场解释造成额外干扰。

如果页面被切走，实验会暂停，直到被试返回页面后继续累计有效浏览时长。

## 调试模式

```text
http://127.0.0.1:8000/?duration=60
http://127.0.0.1:8000/?duration=60&condition=high
http://127.0.0.1:8000/?duration=60&condition=medium
http://127.0.0.1:8000/?duration=60&condition=low
http://127.0.0.1:8000/?duration=60&allowMobile=1
```

## 数据保存方式

提交后，系统会把完整记录保存到：

```text
data/submissions.jsonl
```

每一行都是一份独立记录，包含：

- 被试基本信息
- 随机分组条件
- 开始与结束时间
- 有效浏览时长与离开页面时长
- 浏览行为摘要指标
- 主题偏好得分
- 问卷答案
- 完整事件日志
- 设备信息
- 数据质量标记
- 完成码回执

## 导出为 CSV

```powershell
python export_csv.py
```

会生成：

```text
data/submissions_export.csv
```

## 如何变成公开 URL

这份代码已经是可以部署的最终上线包，但真正的公开 URL 仍然需要放到外部托管平台。最省事的方式是用 Render。

### Render 部署步骤

1. 把整个 `attention_experiment` 文件夹上传到 GitHub。
2. 在 Render 新建 `Web Service`，选择这个仓库。
3. 让平台读取仓库中的 `render.yaml`。
4. 部署完成后，Render 会给你一个公开的 `https://...` 链接，任何人都能打开。

### 已经帮你配好的内容

- `server.py` 会读取 `PORT` 和 `DATA_DIR`
- `render.yaml` 已经挂载持久化磁盘
- 收数会写到 `/var/data/submissions.jsonl`
- 页面和收数接口是同一个站点，公开链接打开即可直接作答

### 手动启动命令

```text
python server.py
```

如果你愿意，我下一步可以继续把它整理成“GitHub 一键上传版”的最终发布清单。
