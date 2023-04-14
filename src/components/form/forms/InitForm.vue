<template>
  <FormView :title="formSetting.title" :params="formSetting.params" />
</template>

<script setup lang="ts">
import { computed, h, type Component } from 'vue'
import FormView from '../Form.vue'
import { initModelFormSettings } from '@/configs'
import { filterUndefined } from '@/utils'
import Input from '@/components/Input.vue'
import InputNumber from '@/components/InputNumber.vue'
import InputNumberGroup from '@/components/InputNumberGroup.vue'
import Radio from '@/components/Radio.vue'
import Select from '@/components/Select.vue'

interface Param {
  name: string
  explain: string
  component: Component
}
interface FormProps {
  title: string
  params: Param[]
}

const formSetting = computed((): FormProps => {
  const { title, params: paramsSetting } = initModelFormSettings
  const params: Param[] = []
  paramsSetting.forEach((item) => {
    const { name, explain, type, isConst, defaultValue, step, range, enum: enum_ } = item
    let component: Component
    const disabled = filterUndefined(isConst)
    switch (type) {
      case 'number':
        component = () =>
          h(InputNumber, {
            defaultValue: defaultValue,
            min: range?.min,
            max: range?.max,
            disabled,
            step
          })
        break
      case 'string':
        component = () =>
          h(Input, {
            defaultValue: defaultValue,
            min: range?.min,
            max: range?.max,
            disabled
          })
        break
      case 'array':
        component = () =>
          h(InputNumberGroup, {
            defaultValue: defaultValue,
            min: range?.min,
            max: range?.max,
            disabled,
            step
          })
        break
      case 'enum':
        if (enum_) {
          const len = enum_.size
          const options: Option[] = []
          enum_.forEach((item) => {
            const index = options.length
            options.push({
              label: item,
              value: index
            })
          })
          if (len < 5) {
            component = () =>
              h(Radio, {
                defaultValue: defaultValue,
                disabled,
                options
              })
          } else {
            component = () =>
              h(Select, {
                defaultValue: defaultValue,
                disabled,
                options
              })
          }
        }
        break
      case 'expression':
        break
    }
    params.push({
      name,
      explain,
      component
    })
  })
  return {
    title,
    params
    // [
    //   {
    //     name: 'd0_water',
    //     explain: 'Distance between water particles in the initial configuration',
    //     component: () =>
    //       h(NInputNumber, {
    //         size: 'small',
    //         clearable: true,
    //         value: d0_network.value,
    //         ['onUpdate:value']: (value) => {
    //           if (value !== null) {
    //             d0_network.value = value
    //           }
    //         }
    //       })
    //   },
    //   {
    //     name: 'D_vesicle',
    //     explain: 'Distance between the bilayer membrane particles',
    //     component: () =>
    //       h(NInputNumber, {
    //         size: 'small',
    //         clearable: true,
    //         value: D_vesicle.value,
    //         ['onUpdate:value']: (value) => {
    //           if (value !== null) {
    //             D_vesicle.value = value
    //           }
    //         }
    //       })
    //   },
    //   {
    //     name: 'R_vesicle',
    //     explain: 'Diameter of the vesicle in initial configuration',
    //     component: () =>
    //       h(NInputNumber, {
    //         size: 'small',
    //         disabled: true,
    //         clearable: true,
    //         value: R_vesicle.value
    //       })
    //   }
    // ]
  }
})
</script>

<style scoped></style>
