import { getTheme } from 'mdui/functions/getTheme.js'
import { setTheme } from 'mdui/functions/setTheme.js'

// TODO
const setLight = () => {
  const currentTheme = getTheme()
  // console.log(currentTheme)
  if (currentTheme === 'light') {
    setTheme('dark')
  } else {
    setTheme('light')
  }
}

export default setLight
