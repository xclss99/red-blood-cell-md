<template>
  <div class="menu-bar">
    <n-button text>
      <RefreshIcon />
    </n-button>
    <n-button text @click="showSetter = true">
      <SettingIcon />
    </n-button>
    <n-button text>
      <NotificationIcon />
    </n-button>
  </div>
  <n-modal v-model:show="showSetter">
    <Setter @close="showSetter = false" />
  </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Setter from '../setter/Setter.vue'
import RefreshIcon from '../icons/RefreshIcon.vue'
import SettingIcon from '../icons/SettingIcon.vue'
import NotificationIcon from '../icons/NotificationIcon.vue'

const showSetter = ref(false)
</script>

<style scoped>
.menu-bar {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
