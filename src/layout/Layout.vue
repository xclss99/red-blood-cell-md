<template>
  <n-layout class="layout">
    <n-layout-header :bordered="headerBordered">
      <keep-alive>
        <Header v-show="showHeader" />
      </keep-alive>
    </n-layout-header>
    <n-layout-content>
      <Content />
    </n-layout-content>
    <n-layout-footer :bordered="footerBordered">
      <keep-alive>
        <Footer v-show="showFooter" />
      </keep-alive>
    </n-layout-footer>
  </n-layout>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'
import { useAppStore } from '@/store'
import { computed } from 'vue'

const appStore = useAppStore()
const headerBordered = computed(() => appStore.header.border)
const footerBordered = computed(() => appStore.footer.border)
const showHeader = computed(() => appStore.header.show)
const showFooter = computed(() => appStore.footer.show)
</script>

<style scoped>
.layout {
  min-height: 100vh;
}
</style>
