# CodeMirror For HW

English docs | [中文文档](./.github/README-zh.md)

[![wakatime](https://wakatime.com/badge/user/018b2987-2ecc-45d3-9469-0a8572bb2e32/project/018cd8e7-f186-4b75-b1ff-0f24cca33d7c.svg)](https://wakatime.com/badge/user/018b2987-2ecc-45d3-9469-0a8572bb2e32/project/018cd8e7-f186-4b75-b1ff-0f24cca33d7c)

Emmm, this is my final homework for Fundamentals of Computer Network Technology. (Maybe a little scribble)

## Brief Introduction

This project is a web python editor and compiler, which is based on [CodeMirror6](https://codemirror.net) and [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket).

Frontend: Typescript + Vue3 + Vite + MDUI + CodeMirror6

Communication: WebSocket

Backend: Node.js (CommonJS) + Python3

## Dependency

- [Node.js](https://nodejs.org) (required)
- [Python3](https://python.org) (run python scripts, required)
- [PyPy](https://pypy.org) (run python scripts, optional)
- ~~[nginx](https://nginx.org) (optional)~~
- ~~[Docker](https://docker.com) and [docker-compose](https://docs.docker.com/compose/) (optional)~~

## Install

```bash
# pnpm and yarn are also recommended
git clone git@github.com:chillcicada/codemirror4hw.git
cd codemirror4hw
npm i
```

## Inspiration

Refer to [Online Python Tutor](https://pythontutor.com).

## Usage

There are many ways to run this project.

### Emphasis

The project uses vite-plugin-eslint to lint the code, if you run `npm run build` you may meet an error caused by the conflict between vite-plugin-eslint and new current typescript. Below is the solution:

Add the `"type": "index.d.ts"` to the `"exports"` of vite-plugin-eslint's package.json.

```json
// node_modules/vite-plugin-eslint/package.json
"exports": {
  ".": {
    "import": "./dist/index.mjs",
    "require": "./dist/index.js",
    "types": "./dist/index.d.ts"  // add this line
  }
}
```

### Node.js

```bash
# start the websocket server
npm run start
# start the preview web
npm run dev
```

Or, you can build it and set proxy server.

```bash
npm run build
```

The `dist/` folder is under the project's root directory.

## TODO

> Some features have not yet been implemented, so stay tuned :)

- refine Nginx.conf
- add Dockerfile
- add debug mode
- ......

<!-- ### Nginx

Use nginx as a reverse proxy server. The setup of WebSocket stays the same via node.js.

```bash
nginx -c nginx.conf
```

### Docker

```bash
docker-compose up -d
``` -->

## Acknowledgement

- [MDUI](https://www.mdui.org) (UI framework)
- [VScode](https://code.visualstudio.com) (Code Editor)
- [Vite](https://vitejs.dev) (Build Tool)
- ......

All other mentioned dependencies are also appreciated.

## LICENSE

[MIT](LICENSE)

Except for the following situations:

If you are a student of [THU](https://www.tsinghua.edu.cn) and you are doing the same or similar final homework, you can use this project as a reference without limitation, but you should not copy the code directly. Well, if you make your homework **based on** this project, ~~you should shoot me an email, and don't forget to invite me for a fruit tea~~.

:)
