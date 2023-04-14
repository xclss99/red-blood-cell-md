<template>
  <n-space vertical align="center">
    <LogoIcon />
    <strong> {{ title }} </strong>
    <span> version {{ version }} </span>
    <p> {{ description }} </p>
    <n-space>
      <n-button type="primary" size="medium">
        <template #icon>
          <CheckUpdateIcon />
        </template>
        Check Update
      </n-button>
      <n-button size="medium"> Changelog </n-button>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import LogoIcon from '../icons/LogoIcon.vue'
import CheckUpdateIcon from '../icons/CheckUpdateIcon.vue'

const title = import.meta.env.VITE_APP_TITLE
const version = import.meta.env.VITE_APP_VERSION
const description = import.meta.env.VITE_APP_DESC
</script>

<style scoped></style>
