import { ref, watch } from 'vue'

function getInitialTheme() {
  if (typeof window === 'undefined') return false
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') return stored === 'dark'
  return false // Default to light theme
}

export function useTheme() {
  const dark = ref(getInitialTheme())

  function toggle() {
    dark.value = !dark.value
  }

  watch(
    dark,
    (val) => {
      if (typeof document === 'undefined') return
      document.documentElement.classList.toggle('dark', val)
      localStorage.setItem('theme', val ? 'dark' : 'light')
    },
    { immediate: true }
  )

  return { isDark: dark, toggle }
}
