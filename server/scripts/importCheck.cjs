function importCheck(pythonScript) {
  return true
}

const pythonScript = `import os
print("Hello, Python!")
`

importCheck(pythonScript)

module.exports = importCheck
