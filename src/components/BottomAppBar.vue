<script setup lang="ts">
import 'mdui/components/divider.js'
import { ref } from 'vue'

const outputRef = ref()

import { MessageData } from '../types/message'
import socket from '../utils/client'

socket.addEventListener('message', (eve) => {
  console.log(eve.data)
  try {
    const msg: MessageData = JSON.parse(eve.data)

    if (msg.tag === 'RUN_CODE_RESULT') {
      outputRef.value.innerHTML = `<div class='default-output'>${msg.data}</div>`
    }

    if (msg.tag === 'RUN_CODE_ERROR') {
      outputRef.value.innerHTML = `<div class='error-output'>${msg.data}</div>`
    }
  } catch (err) {
    // console.error(err)
  }

})
</script>

<template>
  <div style="display: flex; flex-direction: column; width: 100%">
    <p>Output:</p>

    <mdui-divider></mdui-divider>

    <div class="output" ref="outputRef"></div>
  </div>
</template>

<style lang="scss" scoped></style>
