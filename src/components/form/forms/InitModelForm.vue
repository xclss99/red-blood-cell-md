<template>
  <div class="form-title"> Init Model Params </div>
  <n-scrollbar class="pane-container" trigger="none">
    <div class="params-form">
      <div class="param-box">
        <n-popover trigger="hover">
          <template #trigger>
            <div class="param-name">d0_water</div>
          </template>
          <span> Distance between water particles in the initial configuration </span>
        </n-popover>
        <n-input-number v-model:value="params.d0_water" :step="0.1" size="small" clearable />
      </div>
      <div class="param-box">
        <n-popover trigger="hover">
          <template #trigger>
            <div class="param-name">d0_vesicle</div>
          </template>
          <span> Particle distance </span>
        </n-popover>
        <n-input-number v-model:value="params.d0_vesicle" :step="0.01" size="small" clearable />
      </div>
      <div class="param-box">
        <n-popover trigger="hover">
          <template #trigger>
            <div class="param-name">D_vesicle</div>
          </template>
          <span> Distance between the bilayer membrane particles </span>
        </n-popover>
        <n-input-number v-model:value="params.D_vesicle" size="small" clearable />
      </div>
      <div class="param-box">
        <n-popover trigger="hover">
          <template #trigger>
            <div class="param-name">R_vesicle</div>
          </template>
          <span> Diameter of the vesicle in initial configuration </span>
        </n-popover>
        <n-input-number v-model:value="R_vesicle" size="small" clearable disabled />
      </div>
      <div class="param-box">
        <n-popover trigger="hover">
          <template #trigger>
            <div class="param-name">gap</div>
          </template>
          <span> Gap between bilayer and spectrin network in initial configuration </span>
        </n-popover>
        <n-input-number v-model:value="params.gap" size="small" clearable />
      </div>
      <div class="param-box">
        <n-popover trigger="hover">
          <template #trigger>
            <div class="param-name">D_network</div>
          </template>
          <span> Diameter of Spectrin Network in initial configuration </span>
        </n-popover>
        <n-input-number v-model:value="D_network" size="small" clearable disabled />
      </div>
      <div class="param-box">
        <n-popover trigger="hover">
          <template #trigger>
            <div class="param-name">b</div>
          </template>
          <span> Extra space between box boundary and vesicle </span>
        </n-popover>
        <n-input-number v-model:value="params.b" size="small" clearable />
      </div>
      <div class="param-box">
        <n-popover trigger="hover">
          <template #trigger>
            <div class="param-name">n_bead</div>
          </template>
          <span>
            Number of beads between nodes of spectrin network, * needs to be an odd number
          </span>
        </n-popover>
        <n-input-number v-model:value="params.n_bead" size="small" clearable />
      </div>
      <div class="param-box">
        <n-popover trigger="hover">
          <template #trigger>
            <div class="param-name">d0_network</div>
          </template>
          <span> Distance between the nodes in the initial configuration or A-A distance </span>
        </n-popover>
        <n-input-number v-model:value="params.d0_network" size="small" clearable />
      </div>
      <div class="param-box">
        <n-popover trigger="hover">
          <template #trigger>
            <div class="param-name">shape</div>
          </template>
          <span> Shape of bilayer particles, * no need to change this </span>
        </n-popover>
        <n-input v-model:value="params.shape" size="small" clearable disabled />
      </div>
    </div>
  </n-scrollbar>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'

const params = reactive({
  d0_water: 2.7,
  d0_vesicle: 0.97,
  D_vesicle: 50,
  gap: 2,
  b: 10,
  n_bead: 11,
  d0_network: 9,
  shape: '1, 1, 1'
})
const R_vesicle = computed(() => params.D_vesicle / 2)
const D_network = computed(() => params.D_vesicle - params.gap * 2)
</script>

<style scoped></style>
