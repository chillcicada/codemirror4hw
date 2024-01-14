<script setup lang="ts">
// import { type EditorView } from '@codemirror/view'
// import { toRef } from 'vue'

// import editorView from './CodeMirror.vue'

// const editorViewRef = toRef(editorView, 'value')
// const editorViewRef = toRef(editorView) as unknown as EditorView

// const RunCode = () => {
//   console.log(editorViewRef)
// }

import runCode from '../scripts/runCode';
</script>

<template>
  <div style="display: flex; flex-direction: column">

    <br />

    <mdui-button class="runCodeButton" variant="elevated" @click="runCode">Run</mdui-button>

    <br />

    <mdui-select value="python3" label="Interpreter" class="selectInterpreter">
      <mdui-menu-item value="python3">Python3</mdui-menu-item>
      <mdui-menu-item value="pypy">PyPy</mdui-menu-item>
    </mdui-select>
  </div>
</template>

<style lang="scss" scoped>
.selectInterpreter {
  margin: 0.1rem;
}

.runCodeButton {
  margin: 0.1rem;
}
</style>
