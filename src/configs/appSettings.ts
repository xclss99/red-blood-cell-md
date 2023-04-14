import { HEADER_HEIGHT, SIDER_WIDTH, FOOTER_HEIGHT } from './constants'

export const appSettings: App.State = {
  theme: {
    mode: 'os',
    accentColor: 'green'
  },
  header: {
    show: true,
    border: true,
    height: HEADER_HEIGHT,
    logo: '',
    title: ''
  },
  sider: {
    show: true,
    border: true,
    width: SIDER_WIDTH
  },
  footer: {
    show: false,
    border: true,
    height: FOOTER_HEIGHT,
    copyright: 'Copyright © 2023 xclss99'
  }
}
