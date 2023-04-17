<template>
  <Form :title="form.title" :items="form.items"></Form>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Form from '../Form.vue'
import { useForm } from '@/hooks'
import { initModelFormSettings } from '@/configs'

const form = computed(() => useForm(initModelFormSettings))
</script>

<style scoped></style>
