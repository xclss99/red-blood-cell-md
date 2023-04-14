declare namespace App {
  type ThemeMode = 'light' | 'dark' | 'os'
  type AccentColor = 'green' | 'blue' | 'red' | 'yellow' | 'pink' | 'purple'
  type ThemeOverrides = Record<AccentColor, import('naive-ui').GlobalThemeOverrides>
  type AccentColorHex = Record<AccentColor, string>
  interface Theme {
    mode: ThemeMode
    accentColor: AccentColor
  }
  interface Header {
    show: boolean
    border: boolean
    height: number
    logo: string
    title: string
  }
  interface Sider {
    show: boolean
    border: boolean
    width: number
  }
  interface Footer {
    show: boolean
    border: boolean
    height: number
    copyright: string
  }
  interface State {
    theme: Theme
    header: Header
    sider: Sider
    footer: Footer
  }
  interface MenuOption {
    label: string
    key: string
    icon: import('vue').Component
    component: import('vue').Component
  }
  interface SelectOption<T = string> {
    label: string
    value: T
  }
}
