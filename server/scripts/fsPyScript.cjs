function savePyScript(pythonScript) {
  const fs = require('fs')
  const path = require('path')

  const tempDir = __dirname + '/../temp'
  const timestamp = Date.now()
  const fileName = `temp_${timestamp}.py`
  const filePath = path.join(tempDir, fileName)

  fs.writeFile(filePath, pythonScript, (error) => {
    if (error) {
      console.error(error)
      return
    }

    // console.log(`Successfully save the file ${filePath}.`)
  })

  return filePath
}

function rmPyScript(filePath) {
  const fs = require('fs')

  fs.unlink(filePath, (error) => {
    if (error) {
      console.error(error)
      return
    }

    // console.log(`Successfully remove the file ${filePath}.`)
  })
}

function rmAllPyScripts() {
  const fs = require('fs')
  const path = require('path')

  const tempDir = __dirname + '/../temp'

  fs.readdir(tempDir, (error, files) => {
    if (error) {
      console.error(error)
      return
    }

    files.forEach((file) => {
      if (path.extname(file) === '.py') {
        fs.unlink(path.join(tempDir, file), (error) => {
          if (error) {
            console.error(error)
            return
          }

          // console.log(`Successfully remove the file ${file}.`)
        })
      }
    })
  })
}

// ! Test

// const pythonScript = `print("Hello, Python!")
// `

// const filePath = savePyScript(pythonScript)

// rmPyScript(filePath)

// rmAllPyScripts()

module.exports = {
  savePyScript,
  rmPyScript,
  rmAllPyScripts,
}
