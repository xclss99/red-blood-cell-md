export const isOsDarkTheme = () => {
  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  // console.log('os theme mode: ', isDark ? 'dark' : 'light')
  return isDark
}
