<script lang="ts" setup>
import '@mdui/icons/gite.js'
import '@mdui/icons/settings'
import '@mdui/icons/color-lens.js'
import '@mdui/icons/lightbulb.js'
import '@mdui/icons/person.js'

import setLight from '../scripts/setLight'
import setTheme from '../scripts/setTheme'
import setEditor from '../scripts/setEditor'
import openAbout from '../scripts/openAbout'
</script>

<template>
  <mdui-top-app-bar-title class="title">
    CodeMirror and Online Interpreter for Python
  </mdui-top-app-bar-title>

  <mdui-tooltip content="Git repo">
    <mdui-button-icon class="repoButtonIcon" href="https://github.com/chillcicada/codemirror4hw" target="_blank">
      <mdui-icon-gite></mdui-icon-gite>
    </mdui-button-icon>
  </mdui-tooltip>


  <mdui-tooltip content="Light mode">
    <mdui-button-icon class="lightModeButtonIcon" @click="setLight">
      <mdui-icon-lightbulb></mdui-icon-lightbulb>
    </mdui-button-icon>
  </mdui-tooltip>

  <mdui-tooltip content="Theme setting">
    <mdui-button-icon class="themeSettingButtonIcon" @click="setTheme">
      <mdui-icon-color-lens></mdui-icon-color-lens>
    </mdui-button-icon>
  </mdui-tooltip>

  <mdui-tooltip content="Codemirror setting">
    <mdui-button-icon class="cmSettingButtonIcon" @click="setEditor">
      <mdui-icon-settings></mdui-icon-settings>
    </mdui-button-icon>
  </mdui-tooltip>

  <mdui-tooltip content="About">
    <mdui-button-icon class="aboutButtonIcon" @click="openAbout">
      <mdui-icon-person></mdui-icon-person>
    </mdui-button-icon>
  </mdui-tooltip>
</template>

<style lang="scss" scoped></style>
