<script setup lang="ts">
import 'mdui/components/divider.js'
import { ref } from 'vue'

const outputRef = ref()

import { MessageData } from '../types/message'
import socket from '../utils/client'

socket.addEventListener('message', (eve) => {
  // console.log(eve.data)
  try {
    const msg: MessageData = JSON.parse(eve.data)

    switch (msg.tag) {
      case 'RUN_CODE_ERROR':
        outputRef.value.innerHTML = `<div class='error-output'>${msg.data}</div>`
        break
      case 'RUN_CODE_RESULT':
        outputRef.value.innerHTML = `<div class='output'>${msg.data}</div>`
        break
      default:
        break
    }
  } catch (err) {
    // console.error(err)
  }
})
</script>

<template>
  <div class="output-box">
    <p>Output:</p>

    <mdui-divider></mdui-divider>

    <div class="output" ref="outputRef"></div>
  </div>
</template>

<style lang="scss" scoped>
.output-box {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}

.output {
  line-height: 1.5;
}
</style>
