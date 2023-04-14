<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides" :breakpoints="BREAK_POINTS">
    <n-dialog-provider>
      <Layout />
    </n-dialog-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Layout from './layout/Layout.vue'
import { useAppStore } from './store'
import { darkTheme, lightTheme } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'
import { BREAK_POINTS } from './configs'
import { isOsDarkTheme } from './utils'
import { allThemeOverrides } from './plugins'

const appStore = useAppStore()

const theme = ref()
const themeOverrides = ref<GlobalThemeOverrides>()

const setTheme = (mode: App.ThemeMode) => {
  switch (mode) {
    case 'os':
      theme.value = isOsDarkTheme() ? darkTheme : lightTheme
      break
    case 'dark':
      theme.value = darkTheme
      break
    case 'light':
      theme.value = lightTheme
      break
  }
}

const setAccentColor = (color: App.AccentColor) => {
  themeOverrides.value = allThemeOverrides[color]
}

onMounted(() => {
  setTheme(appStore.theme.mode)
  setAccentColor(appStore.theme.accentColor)
})

watch(
  appStore.theme,
  (newVal) => {
    setTheme(newVal.mode)
    setAccentColor(newVal.accentColor)
  },
  { immediate: true }
)
</script>
