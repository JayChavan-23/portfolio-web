import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollMerge() {
  const scrollProgress = ref(0)
  const windowHeight = ref(768)

  function update() {
    if (typeof window === 'undefined') return
    const vh = window.innerHeight
    windowHeight.value = vh
    scrollProgress.value = Math.min(window.scrollY / vh, 1)
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', update)
  })

  return { scrollProgress, windowHeight }
}
