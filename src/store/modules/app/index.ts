import { defineStore } from 'pinia'
import { appSettings, ACCENT_COLOR } from '@/configs'
import { getKeysFromRecord } from '@/utils'

export default defineStore('app', {
  state: (): App.State => ({ ...appSettings }),
  getters: {
    appCurrentSetting(state: App.State): App.State {
      return { ...state }
    },
    accentColorHex() {
      let accentColorHex = ''
      const accentColors = getKeysFromRecord<App.AccentColor, App.AccentColorHex>(ACCENT_COLOR)
      accentColors.forEach((key: App.AccentColor) => {
        if (this.theme.accentColor === key) {
          accentColorHex = ACCENT_COLOR[key]
        }
      })
      return accentColorHex
    }
  },
  actions: {
    setThemeMode(mode: App.ThemeMode) {
      this.theme.mode = mode
    },
    setAccentColor(accentColor: App.AccentColor) {
      this.theme.accentColor = accentColor
    },
    showHeader() {
      this.header.show = !this.header.show
    },
    showFooter() {
      this.footer.show = !this.footer.show
    },
    showSider() {
      this.sider.show = !this.sider.show
    }
  }
})
