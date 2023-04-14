<template>
  <n-radio-group v-model:value="value">
    <n-radio-button
      v-for="(option, index) in options"
      :key="`option-${index + 1}`"
      :value="option.value"
      :label="option.label"
    />
  </n-radio-group>
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
  size?: Size
}
const props = withDefaults(defineProps<Props>(), {
  defaultValue: 0,
  size: 'small'
})
const value = ref(props.defaultValue)
</script>

<style scoped></style>
