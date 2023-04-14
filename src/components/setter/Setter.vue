<template>
  <n-el class="container">
    <n-layout has-sider style="width: 100%" position="absolute">
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="180"
        :collapsed="collapsed"
        show-trigger="bar"
        :native-scrollbar="false"
        class="sider"
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-space vertical>
          <div :class="['sider-title', collapsed ? 'collapsed' : '']">Settings</div>
          <n-menu
            v-model:value="activeKey"
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            style="margin-bottom: 10px"
          />
        </n-space>
      </n-layout-sider>
      <n-layout position="absolute" :style="{ left: collapsed ? '64px' : '180px' }">
        <n-layout-header style="height: 60px; padding: 20px 20px 20px 10px">
          <n-space justify="space-between">
            <div class="content-title">{{ activeTitle }}</div>
            <n-button text @click="handleClose">
              <CloseIcon />
            </n-button>
          </n-space>
        </n-layout-header>
        <n-layout
          position="absolute"
          style="top: 60px"
          :native-scrollbar="false"
          content-style="padding: 15px 30px 15px;"
        >
          <keep-alive>
            <component :is="activeComponent"></component>
          </keep-alive>
        </n-layout>
      </n-layout>
    </n-layout>
  </n-el>
</template>

<script setup lang="ts">
import { h, ref, computed } from 'vue'
import AboutIcon from '../icons/AboutIcon.vue'
import SettingIcon from '../icons/GeneralIcon.vue'
import ThemeIcon from '../icons/ThemeIcon.vue'
import CloseIcon from '../icons/CloseIcon.vue'
import About from './About.vue'
import General from './General.vue'
import Appearance from './Appearance.vue'

const collapsed = ref(false)
const menuOptions: App.MenuOption[] = [
  {
    label: 'General',
    key: 'general',
    icon: () => h(SettingIcon),
    component: General
  },
  {
    label: 'Appearance',
    key: 'appearance',
    icon: () => h(ThemeIcon),
    component: Appearance
  },
  {
    label: 'About RBC-MD',
    key: 'about',
    icon: () => h(AboutIcon),
    component: About
  }
]

const defaultKey = menuOptions[0].key
const activeKey = ref(defaultKey)
const activeTitle = computed(() => {
  const item = menuOptions.find((item) => item.key === activeKey.value)
  return item ? item.label : ''
})
const activeComponent = computed(
  () => menuOptions.find((item) => item.key === activeKey.value)?.component
)

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}
</script>

<style scoped>
.container {
  width: calc(100vw - 60px);
  height: calc(100vh - 120px);
  max-width: 860px;
  max-height: 645px;
  overflow: hidden;
  border-radius: 6px;
  user-select: none;
}
.sider {
  padding: 5px;
}
.sider-title {
  padding: 15px 20px 0;
  padding-bottom: 0px;
  font-size: 18px;
  font-weight: bold;
}
.collapsed {
  color: transparent;
}
.setter-content {
  padding: 20px 30px 20px 40px;
}
.content-title {
  padding-bottom: 0px;
  font-size: 16px;
  font-weight: bold;
}
</style>
