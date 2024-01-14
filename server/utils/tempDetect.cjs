function tempDetect() {
  const fs = require('fs')
  const path = require('path')

  const tempDir = path.join(__dirname, '/../temp')

  fs.access(tempDir, fs.constants.F_OK, (err) => {
    if (err) {
      fs.mkdir(tempDir, (err) => {
        if (err) {
          console.err(err)
          return
        }
      })
    }
  })
}

// ! Test

// tempDetect()

module.exports = tempDetect
