<script setup lang="ts">
// import { type EditorView } from '@codemirror/view'
// import { toRef } from 'vue'

// import editorView from './CodeMirror.vue'

// const editorViewRef = toRef(editorView, 'value')
// const editorViewRef = toRef(editorView) as unknown as EditorView

// const RunCode = () => {
//   console.log(editorViewRef)
// }

import { ref, watch } from 'vue'

import { type Interpreter } from '../types/message';
import runCode from '../scripts/runCode'

const interpreterRef = ref('python')
let interpreter: Interpreter = interpreterRef.value as unknown as Interpreter

const updateInterpreter = (eve: Event) => {
  interpreterRef.value = (eve.target as HTMLSelectElement).value
}

watch(interpreterRef, (newValue) => {
  interpreter = (newValue ? newValue : 'python') as unknown as Interpreter
})
</script>

<template>
  <div style="display: flex; flex-direction: column">

    <br />

    <mdui-button class="runCodeButton" variant="elevated" @click="runCode(interpreter)">Run</mdui-button>

    <br />

    <mdui-select :value="interpreter" label="Interpreter" class="selectInterpreter" @change="updateInterpreter">
      <mdui-menu-item value="python">Python3</mdui-menu-item>
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
