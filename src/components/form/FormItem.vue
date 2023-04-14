<template>
  <div class="param-box">
    <n-popover trigger="hover">
      <template #trigger>
        <div class="param-name">{{ name }}</div>
      </template>
      <span> {{ explain }} </span>
    </n-popover>
    <component :is="component" />
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

interface Param {
  name: string
  explain: string
  component: Component
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<Param>()
</script>

<style scoped></style>
