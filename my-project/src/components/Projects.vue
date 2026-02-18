<script setup lang="ts">
import { ref, computed } from 'vue'

const filters = [
  { id: 'all', label: 'All projects' },
  { id: 'web', label: 'Web based' },
  { id: 'ai', label: 'AI' },
  { id: 'optimisation', label: 'Optimisation' },
]

const activeFilter = ref('all')

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with real-time inventory.',
    image: 'https://picsum.photos/seed/ecom1/400/240',
    category: 'web',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Chatbot Assistant',
    description: 'AI-powered customer support automation.',
    image: 'https://picsum.photos/seed/ai1/400/240',
    category: 'ai',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Performance Dashboard',
    description: 'Real-time metrics and analytics visualisation.',
    image: 'https://picsum.photos/seed/perf1/400/240',
    category: 'optimisation',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Portfolio Builder',
    description: 'Responsive site generator with dark mode.',
    image: 'https://picsum.photos/seed/web1/400/240',
    category: 'web',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Image Classification',
    description: 'ML model for object detection and tagging.',
    image: 'https://picsum.photos/seed/ai2/400/240',
    category: 'ai',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Database Optimiser',
    description: 'Query analysis and indexing recommendations.',
    image: 'https://picsum.photos/seed/opt1/400/240',
    category: 'optimisation',
    link: '#',
    github: '#',
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter((p) => p.category === activeFilter.value)
})
</script>

<template>
  <section
    id="projects"
    class="min-h-screen py-24 text-neutral-900 dark:text-neutral-100 flex flex-col"
  >
    <div class="max-w-5xl mx-auto w-full flex flex-col px-6">
      <h2 class="quantico-bold text-2xl md:text-3xl mb-12 opacity-90 text-center">
        Projects
      </h2>

      <!-- Filters -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="f in filters"
          :key="f.id"
          type="button"
          @click="activeFilter = f.id"
          class="quantico-regular text-sm px-4 py-2 rounded-full transition-all duration-200"
          :class="
            activeFilter === f.id
              ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100'
              : 'border border-neutral-300 dark:border-neutral-600 opacity-75 hover:opacity-100'
          "
        >
          {{ f.label }}
        </button>
      </div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card card-solid group flex flex-col rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
        >
          <div class="card-image aspect-video overflow-hidden bg-neutral-200 dark:bg-neutral-800">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-5 flex flex-col">
            <h3 class="quantico-bold text-lg mb-1">
              {{ project.title }}
            </h3>
            <p class="quantico-regular text-xs opacity-70 mb-4 line-clamp-2 min-h-[2.5rem] leading-relaxed">
              {{ project.description }}
            </p>
            <div class="flex gap-3">
              <a
                :href="project.link"
                class="btn-cta quantico-regular text-xs px-4 py-2 rounded-full border-2 border-neutral-300 dark:border-neutral-600 hover:opacity-80 transition-all duration-200"
              >
                View more
              </a>
              <a
                :href="project.github"
                class="btn-cta quantico-bold text-xs px-4 py-2 rounded-full bg-neutral-200 dark:bg-neutral-700 hover:opacity-90 transition-all duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
