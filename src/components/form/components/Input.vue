<template>
  <n-input
    v-model:value="value"
    :placeholder="placeholder"
    :clearable="clearable"
    :disabled="disabled"
    :readonly="readonly"
    :round="round"
    :size="size"
    :maxlength="max"
    :minlength="min"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Size = 'tiny' | 'small' | 'medium' | 'large'
interface Props {
  defaultValue?: string
  placeholder?: string
  clearable?: boolean
  disabled?: boolean
  readonly?: boolean
  round?: boolean
  size?: Size
  max?: number
  min?: number
}
const props = withDefaults(defineProps<Props>(), {
  defaultValue: '',
  placeholder: 'please input',
  clearable: true,
  size: 'small',
  round: false
})

const value = ref(props.defaultValue)
</script>

<style scoped></style>
