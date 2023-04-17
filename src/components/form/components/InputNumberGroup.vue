<template>
  <n-space :size="6">
    <n-input-number
      v-for="(_item, index) in value"
      :key="`param-${index + 1}`"
      v-model:value="value[index]"
      :placeholder="placeholder"
      :clearable="clearable"
      :disabled="disabled"
      :readonly="readonly"
      :round="round"
      :size="size"
      :step="step"
      :max="max"
      :min="min"
      style="max-width: 80px"
    />
  </n-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Size = 'tiny' | 'small' | 'medium' | 'large'
interface Props {
  defaultValue?: number[]
  placeholder?: string
  clearable?: boolean
  disabled?: boolean
  readonly?: boolean
  round?: boolean
  size?: Size
  step?: number
  max?: number
  min?: number
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  placeholder: 'please input number',
  clearable: true,
  size: 'small',
  round: true
})

const value = ref<number[]>([])
</script>

<style scoped></style>
