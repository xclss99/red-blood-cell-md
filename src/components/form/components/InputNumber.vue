<template>
  <n-input-number
    v-model:value="value"
    :placeholder="placeholder"
    :clearable="clearable"
    :disabled="disabled"
    :readonly="readonly"
    :round="round"
    :size="size"
    :step="step"
    :max="max"
    :min="min"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Size = 'tiny' | 'small' | 'medium' | 'large'
interface Props {
  defaultValue: string
  placeholder: string
  clearable: boolean
  disabled: boolean
  readonly: boolean
  round: boolean
  size: Size
  step: number
  max: number
  min: number
}
const props = withDefaults(defineProps<Partial<Props>>(), {
  defaultValue: '',
  placeholder: 'please input number',
  clearable: true,
  size: 'small',
  round: true
})

const value = ref(props.defaultValue)
</script>

<style scoped></style>
