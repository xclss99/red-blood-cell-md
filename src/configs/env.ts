export const { VITE_NODE_ENV, VITE_BASE_URL, VITE_APP_TITLE, TAURI_PLATFORM, TAURI_DEBUG } =
  import.meta.env

const envInfo = [
  { key: 'TAURI_PLATFORM', value: TAURI_PLATFORM },
  { key: 'VITE_NODE_ENV', value: VITE_NODE_ENV },
  { key: 'VITE_BASE_URL', value: VITE_BASE_URL },
  { key: 'VITE_APP_TITLE', value: VITE_APP_TITLE }
]
console.table(envInfo)
