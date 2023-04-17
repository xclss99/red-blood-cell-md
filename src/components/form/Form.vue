<template>
  <div class="form-title"> {{ title }} </div>
  <n-scrollbar class="pane-container" trigger="none">
    <div class="params-form">
      <FormItem
        v-for="(item, index) in items"
        :key="`item-${index + 1}`"
        :name="item.name"
        :explain="item.explain"
        :component="item.component"
      />
    </div>
  </n-scrollbar>
</template>

<script setup lang="ts">
import { type Component } from 'vue'
import FormItem from './FormItem.vue'

interface Item {
  name: string
  explain: string
  component?: Component
}
interface FormProps {
  title: string
  items: Item[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<FormProps>()
</script>

<style scoped></style>
