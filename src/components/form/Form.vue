<template>
  <div class="form-title"> {{ title }} </div>
  <n-scrollbar class="pane-container" trigger="none">
    <div class="params-form">
      <FormItem
        v-for="(param, index) in params"
        :key="`param-${index + 1}`"
        :name="param.name"
        :explain="param.explain"
        :component="param.component"
      />
    </div>
  </n-scrollbar>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import FormItem from './FormItem.vue'

interface Param {
  name: string
  explain: string
  component: Component
}
interface FormProps {
  title: string
  params: Param[]
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<FormProps>()
</script>

<style scoped></style>
