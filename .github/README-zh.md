# CodeMirror For HW

[English docs](../README.md) | 中文文档

[![wakatime](https://wakatime.com/badge/user/018b2987-2ecc-45d3-9469-0a8572bb2e32/project/018cd8e7-f186-4b75-b1ff-0f24cca33d7c.svg)](https://wakatime.com/badge/user/018b2987-2ecc-45d3-9469-0a8572bb2e32/project/018cd8e7-f186-4b75-b1ff-0f24cca33d7c)

嗯，这是我计算机网络技术基础的大作业。（虽然可能有些潦草）

## 简介

该项目是一个基于 [CodeMirror6](https://codemirror.net) 和 [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) 的在线 Python 编辑器和编译器。

前端：Typescript + Vue3 + Vite + MDUI + CodeMirror6

通信：WebSocket

后端：Node.js（CommonJS）+ Python3

## 灵感

参考了 [Online Python Tutor](https://pythontutor.com)。

## 依赖

- [Node.js](https://nodejs.org)（必需）
- [Python3](https://python.org)（运行Python脚本，必需）
- [PyPy](https://pypy.org)（运行Python脚本，可选）
- ~~[nginx](https://nginx.org)（可选）~~
- ~~[Docker](https://docker.com)和 [docker-compose](https://docs.docker.com/compose/)（可选）~~

## 安装

```bash
# 推荐使用 pnpm 或 yarn
git clone git@github.com:chillcicada/codemirror4hw.git
cd codemirror4hw
npm i
```

## 使用

有多种方法可以运行此项目。

### 强调

该项目使用 vite-plugin-eslint 对代码进行分析，如果运行 `npm run build` 可能会遇到 vite-plugin-eslint 与新版本 typescript 之间的冲突导致的错误。以下是解决方法：

在 vite-plugin-eslint 的 package.json 的 "exports" 项中添加 `"type": "index.d.ts"`。

```json
// node_modules/vite-plugin-eslint/package.json
"exports": {
  ".": {
    "import": "./dist/index.mjs",
    "require": "./dist/index.js",
    "types": "./dist/index.d.ts"  // 添加这一行
  }
}
```

### Node.js

```bash
# 启动 websocket 服务器
npm run start
# 启动预览网页
npm run dev
```

或者，您可以构建它并设置代理服务器。

```bash
npm run build
```

`dist/` 文件夹位于项目的根目录下。

## 待办事项

> 一些功能尚未实现，敬请期待 :)

- 添加 Nginx.conf
- 添加 Dockerfile
- 添加调试模式

<!-- ### Nginx

使用 nginx 作为反向代理服务器。通过 node.js 设置 WebSocket 的方式保持不变。

```bash
nginx -c nginx.conf
```

### Docker

```bash
docker-compose up -d
``` -->

## 致谢

- [MDUI](https://www.mdui.org)（UI 框架）
- [VScode](https://code.visualstudio.com)（代码编辑器）
- [Vite](https://vitejs.dev)（构建工具）
- ......

还感谢所有其他提到的依赖项。

## 许可证

[MIT](../LICENSE)

除以下情况外：

如果您是[清华大学](https://www.tsinghua.edu.cn)的学生，并且正在进行相同或类似的大作业，您可以没有任何限制地将此项目用作参考，但不应直接复制代码。嗯，如果您 **基于** 这个项目完成您的作业，~~您应该给我发一封电子邮件，并不要忘记请我喝水果茶~~。

:)
