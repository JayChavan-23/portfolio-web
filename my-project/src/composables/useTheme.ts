import { ref, watch } from 'vue'

function getInitialTheme() {
  // Always start in light mode on initial load
  if (typeof window === 'undefined') return false
  return false
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
