# 贡献指南

**我们建议和希望您在贡献文档前浏览一下[中文技术文档的写作规范](https://github.com/ruanyf/document-style-guide)**

**需要准备的配置：node 环境，vscode，Git，pnpm**
（node与pnpm配置可参考https://www.bilibili.com/video/BV17tFue1E1K?t=272.5）

## 1. **Fork 源仓库代码**

登录 github 账号后访问目标仓库，点击右上角【Fork】将代码 fork 到自己仓库。

## 2. **Clone 代码到本地**

先进入到期望的目录下，然后使用 cmd 运行 `git clone （仓库地址）` 将代码 clone 到本地（记得用 `git config --global https.proxy http://(代理地址)` 换成梯子线下载），后续可使用github的【sync fork】或在vscode中获取源仓库更新内容。

## 3. **本地浏览**

使用 vscode 打开下载到的目录，打开 vscode 终端运行 `pnpm install`（可能会因为 powershell 阻止运行脚本报错，可自行查阅怎么解决），然后按指示运行即可在本地构建静态网站。

### 配置 Git 用户信息

在vscode终端运行以下命令：git config user.name （github用户名）和git config user.email （github邮箱）

## 4. **本地更改**

在vscode中登录自己的github，添加自己的github仓库为远程存储库，进行调整增删（创建、增加、修改文本等），然后使用 vscode 的源代码管理（`Ctrl + Shift + G`）中的提交功能更新本地仓库。

### 完成提交

提交后会一直处于加载状态，需要在vscode终端依次输入
【git add .】
【git commit -m "（修复了XX问题）"】
【git push origin main】
或
取消vscode的@builtin git功能
即可完成提交

## 5. **同步到远程仓库**

使用源代码管理中的推送将本地仓库同步到远程仓库中（github）。

## 6. **创建拉取请求**

使用 github 仓库界面的贡献创建拉取请求，仓库管理员通过后即可将更改应用到源仓库。
## **提交规范**
![Git提交规范](https://raw.githubusercontent.com/ciquningzuowu/ciquningzuowu.github.io/main/docs/public/Git提交规范.png)
