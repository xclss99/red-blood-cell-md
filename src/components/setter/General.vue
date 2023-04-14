<template>
  <n-space vertical>
    <n-space align="center">
      <span> Language </span>
      <n-select v-model:value="activeLanguage" :options="languageOptions" style="width: 120px" />
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const languageOptions: App.SelectOption[] = [
  {
    label: 'English',
    value: 'enUS'
  },
  {
    label: '简体中文',
    value: 'zhCN'
  }
]
const defaultLanguage = languageOptions[0].value
const activeLanguage = ref(defaultLanguage)
</script>

<style scoped></style>
