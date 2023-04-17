import { h, ref, type Component } from 'vue'
import { filterUndefined } from '@/utils'
import { NInput, NInputNumber } from 'naive-ui'
import InputNumberGroup from '@/components/form/components/InputNumberGroup.vue'
import Radio from '@/components/form/components/Radio.vue'
import Select from '@/components/form/components/Select.vue'

const itemComponent = (param: Form.Param) => {
  const { type, isConst, defaultValue, step, range, enum: enum_ } = param
  let component: Component | undefined = undefined
  const disabled = filterUndefined(isConst)
  switch (type) {
    case 'number': {
      const val = ref<number>(defaultValue as number)
      component = () =>
        h(NInputNumber, {
          value: val.value,
          min: range?.min,
          max: range?.max,
          disabled,
          step,
          onUpdateValue: (value) => {
            if (value !== null) {
              val.value = value
            }
          }
        })
      break
    }
    case 'string': {
      const val = ref<string>(defaultValue as string)
      component = () =>
        h(NInput, {
          value: val.value,
          min: range?.min,
          max: range?.max,
          disabled,
          onUpdateValue: (value) => {
            val.value = value
          }
        })
      break
    }
    case 'numberArray': {
      component = () =>
        h(InputNumberGroup, {
          min: range?.min,
          max: range?.max,
          disabled,
          step
        })
      break
    }
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
              defaultValue: defaultValue as number,
              disabled,
              options
            })
        } else {
          component = () =>
            h(Select, {
              defaultValue: defaultValue as number,
              disabled,
              options
            })
        }
      }
      break
    case 'expression':
      component = undefined
      break
  }
  return component
}

export const useForm = ({ title, params }: Form.Settings) => {
  const items: Form.Item[] = []
  params.forEach((param) => {
    const { name, explain } = param
    const component = itemComponent(param)
    items.push({
      name,
      explain,
      component
    })
  })
  return {
    title,
    items
  }
}
