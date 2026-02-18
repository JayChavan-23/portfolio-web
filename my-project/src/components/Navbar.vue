<script setup lang="ts">
import { useTheme } from '../composables/useTheme'
import { useScrollMerge } from '../composables/useScrollMerge'

const { isDark, toggle } = useTheme()
const { scrollProgress } = useScrollMerge()

const leftLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 h-20 flex items-center py-6 transition-all duration-300 ease-out"
    :class="[
      isDark
        ? 'bg-neutral-950/70 backdrop-blur-2xl text-neutral-100'
        : 'bg-white/70 backdrop-blur-2xl text-neutral-900',
      scrollProgress > 0 ? 'shadow-md' : '',
    ]"
  >
    <div class="relative w-full max-w-5xl mx-auto px-6 grid grid-cols-3 items-center">
      <!-- Left: Links -->
      <div class="flex items-center gap-8 md:gap-12">
        <a
          v-for="link in leftLinks"
          :key="link.label"
          :href="link.href"
          class="nav-link quantico-regular text-sm tracking-wide opacity-75 hover:opacity-100 transition-opacity duration-200"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Name (center) -->
      <a
        href="#"
        class="quantico-bold text-lg tracking-tight justify-self-center opacity-90 hover:opacity-100 transition-opacity duration-200"
      >
        Jay Chavan
      </a>

      <!-- Right: Theme label + icon, Australia CTA -->
      <div class="flex items-center justify-end gap-8 md:gap-12">
        <button
          type="button"
          @click="toggle"
          class="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400/50 focus:ring-offset-2 focus:ring-offset-transparent rounded"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <span class="quantico-regular text-sm tracking-wide">
            {{ isDark ? 'Dark' : 'Light' }}
          </span>
          <i
            v-if="isDark"
            class="fa-solid fa-moon text-base"
          ></i>
          <i v-else class="fa-solid fa-sun text-base"></i>
        </button>

        <a
          href="#"
          class="btn-cta flex items-center gap-2 quantico-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-90 bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
        >
          <i class="fa-solid fa-globe animate-spin-slow text-xs"></i>
          Australia
        </a>
      </div>
    </div>
  </nav>
</template>
