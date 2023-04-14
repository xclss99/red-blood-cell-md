<template>
  <div class="footer-container">footer</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '@/store'

const appStore = useAppStore()

const height = computed(() => appStore.footer.height + 'px')
</script>

<style scoped>
.footer-container {
  height: v-bind(height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 0 10px;
}
</style>
