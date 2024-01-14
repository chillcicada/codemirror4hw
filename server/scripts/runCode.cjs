const { exec } = require('child_process')

const runCode = (filePath, interpreter = 'python') => {
  const command = `${interpreter} ${filePath}`

  return new Promise((resolve, _reject) => {
    exec(command,{ stdio: 'pipe' }, (err, stdout, stderr) => {
      if (err) {
        resolve({
          tag: 'RUN_CODE_ERROR',
          data: stderr,
        })
      }

      resolve({
        tag: 'RUN_CODE_RESULT',
        data: stdout,
      })
    })
  })
}

// ! Test

// runCode(filePath).then((result) => {
//   console.log(result)
// })

module.exports = runCode
