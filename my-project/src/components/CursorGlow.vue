<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const colors: string[] = [
  'rgba(134,239,172,0.55)',  /* mint */
  'rgba(125,211,252,0.5)',   /* sky blue */
  'rgba(253,224,71,0.45)',   /* lemon */
  'rgba(253,186,116,0.5)',   /* peach */
  'rgba(103,232,249,0.5)',   /* aqua */
  'rgba(190,242,100,0.5)',   /* lime */
]

const glows = ref<Array<{ id: number; x: number; y: number; color: string }>>([])
let idCounter = 0
let lastSpawn = 0
let colorIndex = 0
const throttleMs = 35

function spawnGlow(e: MouseEvent) {
  const now = Date.now()
  if (now - lastSpawn < throttleMs) return
  lastSpawn = now

  const id = idCounter++
  const color = colors[colorIndex++ % colors.length] ?? 'rgba(134,239,172,0.55)'
  glows.value.push({ id, x: e.clientX, y: e.clientY, color })

  setTimeout(() => {
    glows.value = glows.value.filter((g) => g.id !== id)
  }, 500)
}

function handleMouseMove(e: MouseEvent) {
  spawnGlow(e)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
    <div
      v-for="glow in glows"
      :key="glow.id"
      class="cursor-glow"
      :style="{
        left: `${glow.x}px`,
        top: `${glow.y}px`,
        background: `radial-gradient(circle, ${glow.color} 0%, transparent 70%)`,
      }"
    />
  </div>
</template>
