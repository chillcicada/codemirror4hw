import { dialog } from 'mdui/functions/dialog.js'

const openAbout = () => {
  dialog({
    headline: 'About',
    body: `<p>CodeMirror and Online Interpreter for Python, made by chillcicada with ♡.</p>`,
    closeOnEsc: true,
    closeOnOverlayClick: true,
    actions: [
      {
        text: 'Cancel',
      },
    ],
  })
}

export default openAbout
