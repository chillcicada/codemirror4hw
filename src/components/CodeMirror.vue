<script lang="ts">
import { basicSetup } from 'codemirror'
import { EditorView, keymap } from '@codemirror/view'
import { EditorState, Compartment } from '@codemirror/state'
import { defaultKeymap } from '@codemirror/commands'
import { python } from '@codemirror/lang-python'
// import { ref } from 'vue'

let language = new Compartment
let tabSize = new Compartment

let state = EditorState.create({
  doc: 'print(hello, world!)',
  extensions: [
    keymap.of(defaultKeymap),
    basicSetup,
    language.of(python()),
    tabSize.of(EditorState.tabSize.of(4))
  ],
})

let view = new EditorView({
  state,
  // parent: document.querySelector('#editor')!,
  parent: document.body,
})

function setTabSize(view: EditorView, size: number) {
  view.dispatch({
    effects: tabSize.reconfigure(EditorState.tabSize.of(size)),
  })
}

export default {
  name: 'CodeMirror',
  setup() {
    return {
      view,
      setTabSize,
    }
  },
}
</script>

<template>
  <!-- <div>
    <textarea ref="editor" id="editor"></textarea>
    <button @click="runCode">运行代码</button>
    <div v-if="output">
      <h3>输出结果:</h3>
      <pre>{{ output }}</pre>
    </div>
  </div> -->
</template>

<style lang="scss"></style>
