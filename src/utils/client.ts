const socket = new WebSocket('ws://localhost:8080')

socket.addEventListener('open', () => {
  socket.send('Hello Server!')
})

socket.addEventListener('error', (err) => {
  console.log('Error: ', err)
})

socket.addEventListener('close', () => {
  console.log('Connection closed')
})

export default socket
