<script lang="ts" setup>
import { EditorView } from '@codemirror/view'
import { EditorState } from '@codemirror/state';
import editorStateConfig from '../scripts/initEditor'

import { onMounted, ref } from 'vue';

const editorRef = ref()
const editorView = ref()

const initEditor = () => {
  if (typeof editorView.value !== "undefined") {
    editorView.value.destroyed()
  }

  const editorState = EditorState.create(editorStateConfig)

  if (editorRef.value) {
    editorView.value = new EditorView({
      state: editorState,
      parent: editorRef.value
    })
  }
}

onMounted(() => {
  initEditor()
})
</script>

<template>
  <div class="editor" ref="editorRef" id="editor"></div>
</template>

<style lang="scss" scoped>
.editor {
  width: 100%;
  height: 100%;
}
</style>
