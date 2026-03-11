<script setup lang="ts">
const footerLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <footer id="contact" class="relative">
    <div
      class="border-t border-neutral-200 dark:border-neutral-800 overflow-hidden bg-[#e8e8e8] dark:bg-neutral-900"
    >
      <!-- Footer content - top section -->
      <div class="pt-16 pb-0 px-6 max-w-5xl mx-auto">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="text-center md:text-left">
            <h3 class="quantico-bold text-xl mb-2">Get in touch</h3>
            <p class="quantico-regular text-sm opacity-75 max-w-md">
              Have a project in mind? I'd love to hear from you.
            </p>
          </div>
          <a
            href="mailto:jaychavan.work@gmail.com"
            class="btn-cta quantico-bold text-sm px-6 py-3 rounded-full bg-white text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100 hover:opacity-90 transition-all duration-200 shrink-0 border border-neutral-300 dark:border-neutral-600 shadow-sm"
          >
            Contact me
          </a>
        </div>

        <div class="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex flex-wrap items-center gap-8">
            <a
              v-for="link in footerLinks"
              :key="link.label"
              :href="link.href"
              class="nav-link quantico-regular text-sm opacity-75 hover:opacity-100 transition-opacity"
            >
              {{ link.label }}
            </a>
            <div class="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jaychavansde/"
                target="_blank"
                rel="noopener noreferrer"
                class="opacity-75 hover:opacity-100 transition-opacity"
                aria-label="LinkedIn"
              >
                <i class="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a
                href="https://github.com/JayChavan-23"
                target="_blank"
                rel="noopener noreferrer"
                class="opacity-75 hover:opacity-100 transition-opacity"
                aria-label="GitHub"
              >
                <i class="fa-brands fa-github text-xl"></i>
              </a>
            </div>
          </div>
          <p class="quantico-regular text-xs opacity-60">
            © {{ new Date().getFullYear() }} Jay Chavan
          </p>
        </div>
      </div>

      <!-- Faded name - spans Projects to ©, no padding below -->
      <div class="pt-0 pb-0 max-w-5xl mx-auto px-6 flex items-end justify-center overflow-hidden">
        <span
          class="quantico-bold leading-none select-none pointer-events-none dark:hidden w-full text-center"
          style="color: rgba(0, 0, 0, 0.12); font-size: min(14vw, 10rem);"
          aria-hidden="true"
        >
          Jay Chavan
        </span>
        <span
          class="quantico-bold leading-none select-none pointer-events-none hidden dark:block w-full text-center"
          style="color: rgba(255, 255, 255, 0.12); font-size: min(14vw, 10rem);"
          aria-hidden="true"
        >
          Jay Chavan
        </span>
      </div>
    </div>
  </footer>
</template>
