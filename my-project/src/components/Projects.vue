<script setup lang="ts">
import { ref, computed, watch } from 'vue'

type Project = {
  id: number
  title: string
  description: string
  fullDescription: string
  technologies: string[]
  image: string
  category: string
  link: string
  github: string
}

const filters = [
  { id: 'all', label: 'All projects' },
  { id: 'web', label: 'Software' },
  { id: 'ai', label: 'AI & Data' },
  { id: 'optimisation', label: 'Optimisation' },
]

const activeFilter = ref('all')

const categoryLabel = (category: string) =>
  filters.find((f) => f.id === category)?.label ?? category

const projects: Project[] = [
  {
    id: 1,
    title: 'LiveWell',
    description:
      'React.js + Tailwind CSS website for older adults to track health data, interact with a chatbot, view frailty scores, and manage reminders.',
    fullDescription:
      'LiveWell is a web companion for older adults, built with React and Tailwind CSS. It lets users track daily health metrics, view frailty scores, manage medicine and vaccination reminders, interact with an AI health chatbot, and follow goals and achievements. The website shares its backend with the mobile app to keep data consistent across devices.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Express.js', 'Firebase Auth', 'Firestore'],
    image: 'https://private-user-images.githubusercontent.com/78658243/547522715-2fe9e345-5b3f-41f4-a812-da8f3a7c38f2.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzMyMTc0MDcsIm5iZiI6MTc3MzIxNzEwNywicGF0aCI6Ii83ODY1ODI0My81NDc1MjI3MTUtMmZlOWUzNDUtNWIzZi00MWY0LWE4MTItZGE4ZjNhN2MzOGYyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAzMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMzExVDA4MTgyN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWEwMTI0MWM5MTFkOGU1ZTcyODNlYmM1MDJkYmRmY2RmMmMzN2QzY2MzNGI1ODBhMDFlZmQxZDdjNDY5YmY5ZTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.6cdxjXw4yZuyg37IUBJGadmK9pnJgv99ntn5uemGFe0',
    category: 'web',
    link: 'https://github.com/JayChavan-23/LiveWell',
    github: 'https://github.com/JayChavan-23/LiveWell',
  },
  {
    id: 2,
    title: 'EventSphere',
    description:
      'Full-stack event discovery platform where users can explore, filter, and register for events, with authentication, admin tools, and a proxy-backed backend/frontend architecture.',
    fullDescription:
      'EventSphere is a full‑stack event discovery platform that lets users search, filter, bookmark, and explore events with rich detail pages. It supports authentication with JWT, profile dashboards, My Events, and an admin panel for managing users and trending events. The system is split into backend, proxy frontend, and MySQL database services for a clean separation of concerns.',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'JWT'],
    image: 'https://github-production-user-asset-6210df.s3.amazonaws.com/142463809/454673444-61195e03-a1a5-4443-ae6c-0c35ed5a8c26.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260311%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260311T085031Z&X-Amz-Expires=300&X-Amz-Signature=abb73bb9414ba2567bfb45005c38ac164bcc33081b45d65e733f0ee67407e99e&X-Amz-SignedHeaders=host',
    category: 'web',
    link: 'https://github.com/JayChavan-23/EventSphere',
    github: 'https://github.com/JayChavan-23/EventSphere',
  },
  {
    id: 3,
    title: 'Grocery Basket Analysis ',
    description:
      'Association rule mining on grocery transactions using the Apriori algorithm to discover frequent itemsets and generate recommendation-style rules.',
    fullDescription:
      'This project performs market basket analysis on grocery transaction data using the Apriori algorithm. It mines frequent itemsets and generates association rules that can be used to understand which products are commonly bought together, supporting recommendation strategies and store layout decisions.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Apriori', 'Jupyter Notebook'],
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*n3xoHQtb7E-E4_i1TZR2Og.png',
    category: 'ai',
    link: 'https://github.com/JayChavan-23/Groceries-Association-Rule-Apriori-Algorithm-',
    github: 'https://github.com/JayChavan-23/Groceries-Association-Rule-Apriori-Algorithm-',
  },
  {
    id: 4,
    title: 'Forecast Energy Consumption ',
    description:
      'Time series forecasting of building energy consumption, analysing seasonal patterns and trends to predict future usage for better energy planning.',
    fullDescription:
      'Forecast Energy Consumption is a time series forecasting project that models historical energy usage data to predict future consumption. It explores seasonal patterns, daily cycles, and long‑term trends, comparing different forecasting techniques to support better energy management and planning.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Time Series Forecasting', 'Jupyter Notebook'],
    image: 'https://www.aemo.com.au/-/media/images/graphics/2017/efi-charts/residential-annual-consumption-forecast.png?h=428&w=800&rev=ee7ccfa337654f8db4c9888fdc57fa52&sc_lang=en&hash=EEC1FFCA5ACEDDEB6C05F81AAA5E0076',
    category: 'ai',
    link: 'https://github.com/JayChavan-23/Forecast-Energy-Consumption-Time-Series-Forecasting-',
    github: 'https://github.com/JayChavan-23/Forecast-Energy-Consumption-Time-Series-Forecasting-',
  },
  {
    id: 5,
    title: 'Boolean Satisfiability Solver',
    description:
      'Boolean SAT solver in Python using the DPLL algorithm. Reads DIMACS CNF formulas and determines satisfiable (SAT) vs unsatisfiable (UNSAT).',
    fullDescription:
      'A Boolean SAT solver implemented in Python using the classic DPLL (Davis–Putnam–Logemann–Loveland) algorithm. It parses DIMACS CNF files, applies unit propagation and backtracking search, and reports whether the formula is SAT or UNSAT. The project highlights the performance benefits of DPLL compared to naive brute‑force enumeration.',
    technologies: ['Python', 'DPLL', 'Algorithm Design'],
    image: 'https://res.cloudinary.com/codecrucks/images/c_scale,w_303,h_183,dpr_2/f_webp,q_auto/v1678206574/non-deterministic-satisfiability-problem/non-deterministic-satisfiability-problem.png?_i=AA',
    category: 'optimisation',
    link: 'https://github.com/JayChavan-23/Boolean-Satisfiability-Solver',
    github: 'https://github.com/JayChavan-23/Boolean-Satisfiability-Solver',
  },
  {
    id: 6,
    title: 'Improving LLM Accuracy with In-Context Learning',
    description:
      "Research project on enhancing algorithmic reasoning and accuracy in large language models using in-context learning strategies across multiple phases and benchmarks.",
    fullDescription:
      'This research project explores how different in‑context learning strategies can improve algorithmic reasoning in large language models. Across multiple phases, it studies prompting techniques on GSM8K, evaluates accuracy, and experiments with retrieval‑augmented prompts using vector embeddings to supply similar example problems.',
    technologies: ['Large Language Models', 'In-Context Learning', 'Vector Embeddings', 'Python'],
    image: 'https://pixelplex.io/wp-content/uploads/2024/01/llm-applications-meta.jpg',
    category: 'ai',
    link: 'https://github.com/JayChavan-23/Research-On-LLM-s',
    github: 'https://github.com/JayChavan-23/Research-On-LLM-s',
  },
  {
    id: 7,
    title: 'Poker Hand Analysis',
    description:
      'Web-based poker tracking and analysis tool to log sessions, monitor performance, and visualise key statistics over time.',
    fullDescription:
      'Poker Hand Analysis is a web application for tracking poker sessions and visualising performance over time. It lets players log hands and sessions, track bankroll changes, and review key statistics so they can identify leaks and improve their game.',
    technologies: ['TypeScript', 'React (or Next.js)', 'CSS'],
    image: 'https://media.poker.org/prod/images/article_large/7e665bacac19-470902983a4115a03k.webp',
    category: 'web',
    link: 'https://github.com/JayChavan-23/Poker-Tracker',
    github: 'https://github.com/JayChavan-23/Poker-Tracker',
  },
  {
    id: 8,
    title: 'EV-2 Electric Bikes Website',
    description:
      'Electric bike store website that showcases available models, highlights key specifications, and lets customers contact the dealer for more details.',
    fullDescription:
      'EV‑2 is a multi‑page website for an electric bike store. It showcases available bikes with imagery and specs, explains key benefits, and provides contact flows for potential buyers. An admin panel allows managing bikes and content, making it a simple but complete web presence for the dealership.',
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'XAMPP'],
    image: 'https://user-images.githubusercontent.com/78658243/195590384-09b4b1d1-dcfe-4592-aced-6770cbbe553a.png',
    category: 'web',
    link: 'https://github.com/JayChavan-23/EV-2',
    github: 'https://github.com/JayChavan-23/EV-2',
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter((p) => p.category === activeFilter.value)
})

const selectedProject = ref<Project | null>(null)
const isModalOpen = ref(false)

function openProject(project: Project) {
  selectedProject.value = project
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
  selectedProject.value = null
}

watch(
  isModalOpen,
  (open) => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = open ? 'hidden' : ''
  },
  { immediate: false }
)
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
          <div
            class="card-image relative aspect-video overflow-hidden bg-neutral-200 dark:bg-neutral-800"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute left-3 top-3">
              <span
                class="quantico-regular text-[10px] px-2 py-1 rounded-full border border-neutral-300/70 dark:border-neutral-700/70 bg-white/70 dark:bg-neutral-950/50 backdrop-blur-sm"
              >
                {{ categoryLabel(project.category) }}
              </span>
            </div>
          </div>
          <div class="p-5 flex flex-col">
            <h3 class="quantico-bold text-lg mb-1">
              {{ project.title }}
            </h3>
            <p class="quantico-regular text-xs opacity-70 mb-4 line-clamp-2 min-h-10 leading-relaxed">
              {{ project.description }}
            </p>
            <div class="flex gap-3">
              <button
                type="button"
                class="btn-cta quantico-regular text-xs px-4 py-2 rounded-full border-2 border-neutral-300 dark:border-neutral-600 hover:opacity-80 transition-all duration-200"
                @click="openProject(project)"
              >
                View details
              </button>
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

    <!-- Project details modal -->
    <transition name="fade">
      <div
        v-if="isModalOpen && selectedProject"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
        @click.self="closeModal"
      >
        <div
          class="relative w-full max-w-xl md:max-w-2xl max-h-[85vh] rounded-2xl bg-white dark:bg-neutral-900 shadow-xl overflow-hidden animate-fade-in flex flex-col"
        >
          <button
            type="button"
            class="absolute right-4 top-4 text-xs quantico-bold px-2 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:opacity-80"
            @click="closeModal"
          >
            Close
          </button>

          <div class="w-full aspect-video overflow-hidden bg-neutral-200 dark:bg-neutral-800 shrink-0">
            <img
              :src="selectedProject.image"
              :alt="selectedProject.title"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="p-6 space-y-4 overflow-y-auto">
            <div class="flex items-center justify-between gap-3">
              <h3 class="quantico-bold text-xl">
                {{ selectedProject.title }}
              </h3>
              <span
                class="quantico-regular text-[11px] px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700"
              >
                {{ categoryLabel(selectedProject.category) }}
              </span>
            </div>

            <p class="quantico-regular text-sm opacity-80 leading-relaxed">
              {{ selectedProject.fullDescription }}
            </p>

            <div v-if="selectedProject.technologies?.length" class="space-y-2">
              <h4 class="quantico-bold text-xs uppercase tracking-wide opacity-70">
                Technologies used
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in selectedProject.technologies"
                  :key="tech"
                  class="quantico-regular text-[11px] px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between pt-2">
              <a
                :href="selectedProject.github"
                target="_blank"
                rel="noreferrer"
                class="btn-cta quantico-bold text-xs px-4 py-2 rounded-full bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 transition-all duration-200"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>
