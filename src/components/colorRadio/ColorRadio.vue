<template>
  <n-space align="center">
    <div
      v-for="(color, index) in accentColors"
      class="radio"
      :key="'color-' + index"
      :style="style(color)"
      @click="handleCheckColor(color)"
    >
      <CheckedIcon v-if="activeColor === color" />
    </div>
  </n-space>
</template>

<script setup lang="ts">
import { type StyleValue, ref } from 'vue'
import { accentColors } from '@/plugins'
import { ACCENT_COLOR } from '@/configs'
import CheckedIcon from '../icons/CheckedIcon.vue'
import { useAppStore } from '@/store'

const style = (color: App.AccentColor): StyleValue => {
  return {
    background: ACCENT_COLOR[color],
    borderColor: activeColor.value === color ? 'rgba(255, 255, 255, 0.5)' : 'transparent'
  }
}

const appStore = useAppStore()
const defaultColor = appStore.theme.accentColor
const activeColor = ref<App.AccentColor>(defaultColor)

const emit = defineEmits(['change'])
const handleCheckColor = (color: App.AccentColor) => {
  activeColor.value = color
  emit('change', color)
}
</script>

<style scoped>
.radio {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid transparent;
}
</style>
