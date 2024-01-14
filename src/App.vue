<script setup lang="ts">
import CodeMirror from './components/CodeMirror.vue'
import TopAppBar from './components/TopAppBar.vue'
import SideAppBar from './components/SideAppBar.vue'
import BottomAppBar from './components/BottomAppBar.vue'

import { setTheme } from 'mdui/functions/setTheme.js'

// setTheme('auto')
setTheme('light')
</script>

<template>
  <mdui-layout class="layout">
    <mdui-top-app-bar class="top-app-bar">
      <TopAppBar />
    </mdui-top-app-bar>

    <mdui-layout-item placement="right" class="side-app-bar" style="width: 10vw">
      <SideAppBar />
    </mdui-layout-item>

    <mdui-layout-item placement="bottom" class="bottom-app-bar" style="height: 25vh">
      <BottomAppBar />
    </mdui-layout-item>

    <mdui-layout-main class="main">
      <CodeMirror />
    </mdui-layout-main>
  </mdui-layout>
</template>

<style lang="scss" scoped>
.layout {
  // fuck that why 100vh extends beyond my screen, :(
  height: 98vh;
}

.side-app-bar {
  justify-content: center;
}
</style>
