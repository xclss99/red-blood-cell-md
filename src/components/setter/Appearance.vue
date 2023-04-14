<template>
  <n-space vertical :size="20">
    <n-space vertical>
      <span> Background </span>
      <n-radio-group v-model:value="activeThemeMode">
        <n-radio-button
          v-for="option in themeModeOptions"
          :key="option.value"
          :value="option.value"
          :label="option.label"
        />
      </n-radio-group>
      <!-- <n-select v-model:value="activeThemeMode" :options="themeModeOptions" style="width: 150px" /> -->
    </n-space>
    <n-space vertical>
      <span> Accent Color </span>
      <ColorRadio @change="handleAccentColorChange" />
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useAppStore } from '@/store'
import ColorRadio from '../colorRadio/ColorRadio.vue'

const themeModeOptions: App.SelectOption<App.ThemeMode>[] = [
  {
    label: 'Follow System',
    value: 'os'
  },
  {
    label: 'Dark Mode',
    value: 'dark'
  },
  {
    label: 'Light Mode',
    value: 'light'
  }
]
const appStore = useAppStore()
const defaultThemeMode = appStore.theme.mode
const activeThemeMode = ref<App.ThemeMode>(defaultThemeMode)
watch(activeThemeMode, (newVal) => {
  appStore.setThemeMode(newVal)
})

const handleAccentColorChange = (color: App.AccentColor) => {
  appStore.setAccentColor(color)
}
</script>

<style scoped></style>
