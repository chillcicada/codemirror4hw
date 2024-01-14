import socket from '../utils/client'
import { Interpreter } from '../types/message'
import { type MessageData } from '../types/message'

const runCode = (interpreter: Interpreter) => {
  const pyScript: MessageData = {
    tag: 'RUN_CODE',
    // querySelector is more useful than ref :(
    data: (document.querySelector('.cm-content') as HTMLElement).innerText,
    interpreter: interpreter,
  }
  socket.send(JSON.stringify(pyScript))
}

export default runCode
