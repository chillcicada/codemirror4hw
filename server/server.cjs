const tempDetect = require('./utils/tempDetect.cjs')
const pyDetect = require('./utils/pythonDetect.cjs')

tempDetect()

pyDetect.pythonDetect()
pyDetect.pypyDetect()

const fsPy = require('./scripts/fsPyScript.cjs')
const runCode = require('./scripts/runCode.cjs')

fsPy.rmAllPyScripts()

const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

console.log('Server started on port 8080!')

wss.on('connection', (ws) => {
  ws.send('Hello Client!')

  ws.on('message', (msg) => {
    console.log('Received message from client: ' + msg)
    try {
      msg = JSON.parse(msg)
      if (msg.tag === 'RUN_CODE') {
        const filePath = fsPy.savePyScript(msg.data)
        runCode(filePath, msg.interpreter).then((res) => {
          console.log(res)
          ws.send(JSON.stringify(res))
        })
        // fsPy.rmPyScript(filePath)
      }
    } catch (e) {
      // console.log(e)
    }
  })

  ws.on('close', () => {
    console.log('Client disconnected!')
  })
})

wss.on('error', (err) => {
  console.log(err)
})

// wss.on('close', () => {
//   console.log('Server stopped!')
//   fsPy.rmAllPyScripts()
// })
