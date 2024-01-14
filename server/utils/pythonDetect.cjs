const { exec } = require('child_process')

function pythonDetect() {
  const pythonShell = 'python --version'

  exec(pythonShell, (err) => {
    if (err) {
      console.warn('python is not found or not added to path')
      return
    }
  })
}

function pypyDetect() {
  const pypyShell = 'pypy --version'

  exec(pypyShell, (err) => {
    if (err) {
      console.log('pypy is not found or not added to path')
      return
    }
  })
}

// ! Test

// pythonDetect()

// pypyDetect()

module.exports = {
  pypyDetect,
  pythonDetect,
}
