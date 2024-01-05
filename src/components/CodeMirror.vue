<script lang="ts">
import { basicSetup } from 'codemirror'
import { EditorView, keymap } from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { defaultKeymap } from '@codemirror/commands'
// import python from '@codemirror/lang-python'

let startState = EditorState.create({
  doc: 'hello, world!',
  extensions: [keymap.of(defaultKeymap), basicSetup],
})

let view = new EditorView({
  state: startState,
  // parent: document.querySelector('#editor')!,
  parent: document.body,
})

export default {
  name: 'CodeMirror',
  setup() {
    return {
      view,
    }
  },
}
</script>

<template>
  <!-- <div>
    <textarea ref="editor"></textarea>
    <button @click="runCode">运行代码</button>
    <div v-if="output">
      <h3>输出结果:</h3>
      <pre>{{ output }}</pre>
    </div>
  </div> -->
</template>

<style lang="scss"></style>
