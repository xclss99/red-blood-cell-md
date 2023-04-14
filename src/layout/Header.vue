<template>
  <div class="header-container">
    <Menu />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '@/store'
import Menu from '@/components/menu/Menu.vue'

const appStore = useAppStore()

const height = computed(() => appStore.header.height + 'px')
</script>

<style scoped>
.header-container {
  height: v-bind(height);
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 15px;
  padding: 0 10px;
}
</style>
