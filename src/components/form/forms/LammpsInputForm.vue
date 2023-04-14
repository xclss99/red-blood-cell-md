<template>
  <div class="form-title"> Input Params </div>
  <n-scrollbar class="pane-container" trigger="none">
    <div class="params-form">
      <div class="param-box">
        <n-popover trigger="hover">
          <template #trigger>
            <div class="param-name">P_damp</div>
          </template>
          <span>
            Sets the Pressure damping variable used in the following " fix npt" commands
          </span>
        </n-popover>
        <n-input-number v-model:value="params.P_damp" size="small" clearable />
      </div>
      <div class="param-box">
        <n-popover trigger="hover">
          <template #trigger>
            <div class="param-name">P</div>
          </template>
          <span>
            Sets the desired pressure of the system used in the following " fix npt" commands
          </span>
        </n-popover>
        <n-input-number v-model:value="params.P" :step="0.01" size="small" clearable />
      </div>
      <div class="param-box">
        <n-popover trigger="hover">
          <template #trigger>
            <div class="param-name">ew</div>
          </template>
          <span>
            Sets the energy well ( epsilon) variable used in the pair coefficient specificationsn
          </span>
        </n-popover>
        <n-input-number v-model:value="params.ew" :step="0.1" size="small" clearable />
      </div>
      <div class="param-box">
        <n-popover trigger="hover">
          <template #trigger>
            <div class="param-name">ini_T</div>
          </template>
          <span> Sets the initial temperature used in the fix commands below </span>
        </n-popover>
        <n-input-number v-model:value="params.ini_T" :step="0.01" size="small" clearable />
      </div>
      <div class="param-box">
        <n-popover trigger="hover">
          <template #trigger>
            <div class="param-name">T</div>
          </template>
          <span> Sets the final temperature used in the fix commands below </span>
        </n-popover>
        <n-input-number v-model:value="params.T" :step="0.01" size="small" clearable />
      </div>
      <div class="param-box">
        <n-popover trigger="hover">
          <template #trigger>
            <div class="param-name">LD</div>
          </template>
          <span> Sets the temperature damping parameter used in fix commands below </span>
        </n-popover>
        <n-input-number v-model:value="params.LD" :step="0.1" size="small" clearable />
      </div>
    </div>
  </n-scrollbar>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const params = reactive({
  P_damp: 1,
  P: 0.05,
  ew: 0.2,
  ini_T: 0.02,
  T: 0.23,
  LD: 1.0
})
</script>

<style scoped></style>
