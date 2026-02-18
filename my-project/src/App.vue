<script setup lang="ts">
import { computed } from 'vue'
import Navbar from './components/Navbar.vue'
import CursorGlow from './components/CursorGlow.vue'
import Education from './components/Education.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'
import { useScrollMerge } from './composables/useScrollMerge'

const { scrollProgress, windowHeight } = useScrollMerge()

const heroTitleStyle = computed(() => {
  const p = scrollProgress.value
  const vh = windowHeight.value
  const navCenterY = 40
  const scale = 1 - p * 0.8
  const translateY = p * (navCenterY - vh / 2)
  const opacity = 1 - p
  return {
    transform: `translate(-50%, calc(-50% + ${translateY}px)) scale(${scale})`,
    opacity: Math.max(0, opacity),
  }
})

const heroSubtitleStyle = computed(() => {
  const p = scrollProgress.value
  const vh = windowHeight.value
  const navCenterY = 40
  const offsetY = 80
  const scale = 1 - p * 0.8
  const translateY = p * (navCenterY - vh / 2 - offsetY) + offsetY
  const opacity = 1 - p
  return {
    transform: `translate(-50%, calc(-50% + ${translateY}px)) scale(${scale})`,
    opacity: Math.max(0, opacity),
    pointerEvents: p > 0.95 ? 'none' as const : 'auto' as const,
  }
})

const heroResumeStyle = computed(() => {
  const p = scrollProgress.value
  const vh = windowHeight.value
  const navCenterY = 40
  const offsetY = 140
  const scale = 1 - p * 0.8
  const translateY = p * (navCenterY - vh / 2 - offsetY) + offsetY
  const opacity = 1 - p
  return {
    transform: `translate(-50%, calc(-50% + ${translateY}px)) scale(${scale})`,
    opacity: Math.max(0, opacity),
    pointerEvents: p > 0.95 ? 'none' as const : 'auto' as const,
  }
})

const scrollDownStyle = computed(() => {
  const p = scrollProgress.value
  /* Disappear within first ~6% of viewport scroll */
  const opacity = Math.max(0, 1 - p * 18)
  return { opacity }
})
</script>

<template>
  <div
    class="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-300 ease-out overflow-hidden"
  >
    <CursorGlow />
    <Navbar />

    <!-- Hero - one viewport, navbar overlays -->
    <main class="min-h-screen relative bg-grid">
      <div class="hero-reveal fixed inset-0 z-[9] pointer-events-none" aria-hidden="true">
        <h1
          class="fixed left-1/2 top-1/2 quantico-bold text-6xl md:text-7xl lg:text-8xl origin-center pointer-events-none z-10 will-change-transform"
          :style="heroTitleStyle"
        >
          Jay Chavan
        </h1>
      </div>
      <div class="hero-reveal hero-reveal-delay-1 fixed inset-0 z-[9] pointer-events-none" aria-hidden="true">
        <p
          class="fixed left-1/2 top-1/2 quantico-regular text-2xl md:text-3xl opacity-75 origin-center pointer-events-none z-10 will-change-transform"
          :style="heroSubtitleStyle"
        >
          Software Developer
        </p>
      </div>
      <div class="hero-reveal hero-reveal-delay-2 fixed inset-0 z-[9] pointer-events-none" aria-hidden="true">
        <a
          href="#resume"
          class="fixed left-1/2 top-1/2 quantico-bold text-sm px-5 py-2.5 rounded-full bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100 hover:opacity-90 transition-opacity duration-200 will-change-transform flex items-center gap-2 pointer-events-auto z-10"
          :style="heroResumeStyle"
        >
          Resume
          <i class="fa-solid fa-arrow-right animate-arrow-bounce"></i>
        </a>
      </div>
      <a
        href="#projects"
        class="scroll-down-hint fixed left-1/2 bottom-6 -translate-x-1/2 quantico-regular text-sm hover:opacity-100 flex flex-col items-center gap-1 z-10"
        :style="scrollDownStyle"
      >
        Scroll down
        <i class="fa-solid fa-chevron-down text-xs animate-bounce"></i>
      </a>
    </main>

    <Education />
    <Projects />
    <Footer />
  </div>
</template>
