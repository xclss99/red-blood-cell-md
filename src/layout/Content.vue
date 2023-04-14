<template>
  <n-el class="content-container">
    <splitpanes horizontal>
      <pane>
        <splitpanes>
          <pane min-size="15" size="30">
            <InitForm />
          </pane>
          <pane min-size="15" size="30">
            <LammpsInputForm />
          </pane>
          <pane min-size="20" size="40">
            <LammpsModel />
          </pane>
        </splitpanes>
      </pane>
      <pane min-size="5" max-size="80" size="25">
        <Logger />
      </pane>
    </splitpanes>
  </n-el>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '@/store'
import { Splitpanes, Pane } from 'splitpanes'
import InitForm from '@/components/form/forms/InitForm.vue.js'
// import InitModelForm from '@/components/form/InitModelForm.vue'
import LammpsInputForm from '@/components/form/forms/LammpsInputForm.vue.js'
import LammpsModel from '@/components/model/LammpsModel.vue'
import Logger from '@/components/logger/Logger.vue'

const appStore = useAppStore()

const outHeight = computed(() => {
  return (
    (appStore.header.show ? appStore.header.height : 0) +
    (appStore.footer.show ? appStore.footer.height : 0) +
    2 +
    'px'
  )
})

const assentColorHex = computed(() => appStore.accentColorHex)
</script>

<style>
.content-container {
  height: calc(100vh - v-bind(outHeight));
}
.form-title {
  padding: 4px 8px;
  border-bottom: 1px solid var(--divider-color);
}
.pane-container {
  padding: 8px 8px 0px;
  width: calc(100% - 16px);
  height: calc(100% - 8px);
}
.params-form {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.param-box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}
.param-name {
  width: 80px;
}
.n-input,
.n-input-number {
  max-width: 128px;
}
.splitpanes__splitter {
  background-color: var(--border-color);
  position: relative;
}
.splitpanes__splitter:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.4s;
  opacity: 0;
  z-index: 1;
  background-color: v-bind(assentColorHex);
}
.splitpanes__splitter:hover:before {
  opacity: 1;
}
.splitpanes--vertical > .splitpanes__splitter:before {
  left: -2px;
  right: -2px;
  height: 100%;
}
.splitpanes--horizontal > .splitpanes__splitter:before {
  top: -2px;
  bottom: -2px;
  width: 100%;
}
</style>
