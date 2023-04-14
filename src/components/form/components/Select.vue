<template>
  <n-select v-model:value="value" :size="size" :options="options" :disabled="disabled" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Size = 'tiny' | 'small' | 'medium' | 'large'
interface Option {
  label: string
  value: number
}
interface Props {
  defaultValue?: number
  options: Option[]
  disabled?: boolean
  size?: Size
}
const props = withDefaults(defineProps<Props>(), {
  defaultValue: 0,
  disabled: false,
  size: 'small'
})
const value = ref(props.defaultValue)
</script>

<style scoped></style>
