import 'mdui'
import 'mdui/mdui.css'

import { printConsoleMessage } from './utils/console'

import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'

createApp(App).mount('#app')

printConsoleMessage()
