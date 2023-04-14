import type { App } from 'vue'
import {
  create,
  NEl,
  NIcon,
  NMenu,
  NModal,
  NInput,
  NSpace,
  NLayout,
  NButton,
  NPopover,
  NEllipsis,
  NScrollbar,
  NRadioGroup,
  NRadioButton,
  NInputNumber,
  NLayoutHeader,
  NLayoutFooter,
  NLayoutContent,
  NDialogProvider,
  NConfigProvider
} from 'naive-ui'
import { ACCENT_COLOR } from '@/configs'
import { getKeysFromRecord } from '@/utils'

const setupNaiveUI = (app: App<Element>): void => {
  const naive = create({
    components: [
      NEl,
      NIcon,
      NMenu,
      NModal,
      NInput,
      NSpace,
      NLayout,
      NButton,
      NPopover,
      NEllipsis,
      NScrollbar,
      NRadioGroup,
      NRadioButton,
      NInputNumber,
      NLayoutHeader,
      NLayoutFooter,
      NLayoutContent,
      NDialogProvider,
      NConfigProvider
    ]
  })
  app.use(naive)
}

const accentColors = getKeysFromRecord<App.AccentColor, App.AccentColorHex>(ACCENT_COLOR)

const transformPrimaryColor = (primaryColor: string) => {
  const hexToDec = (hex: string) => parseInt(hex, 16)
  const r = hexToDec(primaryColor.slice(1, 3))
  const g = hexToDec(primaryColor.slice(3, 5))
  const b = hexToDec(primaryColor.slice(5, 7))
  const toHoverRGB = (): RGBColor => {
    const newR = r + 28
    const newG = g + 5
    const newB = b + 13
    return {
      r: Math.min(newR, 255),
      g: Math.min(newG, 255),
      b: Math.min(newB, 255)
    }
  }
  const toPressedRGB = (): RGBColor => {
    const newR = r - 9
    const newG = g - 20
    const newB = b - 16
    return {
      r: Math.max(newR, 0),
      g: Math.max(newG, 0),
      b: Math.max(newB, 0)
    }
  }
  const hover = toHoverRGB()
  const pressed = toPressedRGB()
  const decToHex = (dec: number) => {
    let hex = dec.toString(16)
    if (hex.length === 1) {
      hex = `0${hex}`
    }
    return hex
  }
  const rgbToHex = ({ r, g, b }: RGBColor) => `#${decToHex(r)}${decToHex(g)}${decToHex(b)}`
  return {
    primaryColorHover: rgbToHex(hover),
    primaryColorPressed: rgbToHex(pressed)
  }
}

const allThemeOverrides: Partial<App.ThemeOverrides> = {}
accentColors.forEach((key: App.AccentColor) => {
  const primaryColor = ACCENT_COLOR[key]
  const { primaryColorHover, primaryColorPressed } = transformPrimaryColor(primaryColor)
  allThemeOverrides[key] = {
    common: {
      primaryColor,
      primaryColorHover,
      primaryColorPressed,
      borderRadius: '6px'
    },
    Slider: {
      fillColor: primaryColor,
      fillColorHover: primaryColorHover,
      dotBorderActive: `2px solid ${primaryColor}`
    },
    Menu: {
      itemHeight: '36px'
    }
  }
})

export { setupNaiveUI, accentColors, allThemeOverrides }
