import socket from '../utils/client'

import { type MessageData } from '../types/message'

const runCode = () => {
  const pyScript: MessageData = {
    tag: 'RUN_CODE',
    // querySelector is more useful than ref :(
    data: (document.querySelector('.cm-content') as HTMLElement).innerText,
    interpreter: 'python',
  }
  socket.send(JSON.stringify(pyScript))
}

export default runCode
