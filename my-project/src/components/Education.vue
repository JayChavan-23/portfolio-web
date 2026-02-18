<script setup lang="ts">
const degrees = [
  {
    degree: 'Bachelor of Computer Science',
    university: 'University of Mumbai',
    gpa: '9.76/10',
  },
  {
    degree: 'Master of Computer Science',
    university: 'University of Adelaide',
    gpa: '6.2/7',
  },
]
</script>

<template>
  <section
    id="education"
    class="section-solid py-24 text-neutral-900 dark:text-neutral-100 bg-[#e8e8e8] dark:bg-neutral-900"
  >
    <div class="max-w-5xl mx-auto px-6">
      <h2 class="quantico-bold text-2xl md:text-3xl mb-16 opacity-90 text-center">
        Education
      </h2>

      <!-- Horizontal progress timeline - centered -->
      <div class="flex justify-center">
        <div class="relative flex gap-8 md:gap-20 justify-center items-start">
          <!-- Progress line - spans between the two nodes -->
          <div
            class="absolute top-[11px] left-0 right-0 h-px bg-neutral-400 dark:bg-neutral-600"
            aria-hidden="true"
          />
          <article
            v-for="(item, i) in degrees"
            :key="i"
            class="education-item relative flex-shrink-0 w-[240px] md:w-[280px] text-center cursor-default"
          >
            <!-- Node on timeline -->
            <div
              class="education-node w-3 h-3 rounded-full bg-neutral-400 dark:bg-neutral-500 mb-6 mx-auto"
              aria-hidden="true"
            />

            <h3 class="quantico-bold text-lg mb-1">
              {{ item.degree }}
            </h3>
            <p class="quantico-regular text-sm opacity-75 mb-2">
              {{ item.university }}
            </p>
            <p class="quantico-regular text-sm opacity-60">
              {{ item.gpa }} GPA
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
