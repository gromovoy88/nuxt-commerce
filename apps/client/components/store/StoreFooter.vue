<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <footer class="relative py-12 md:py-20">
    <UContainer class="mb-6 lg:mb-12">
      <section class="rounded-lg bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div class="mx-auto max-w-screen-md sm:text-center">
            <h2
              class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            >
              {{ $t('messages.newsletter.title') }}
            </h2>
            <p
              class="mx-auto mb-8 max-w-2xl font-light text-gray-500 sm:text-xl md:mb-12 dark:text-gray-400"
            >
              {{ $t('messages.newsletter.subtitle') }}
            </p>
            <NewsletterSignupForm class="mb-6" />
          </div>
        </div>
      </section>
    </UContainer>
    <UContainer>
      <div
        class="grid grid-cols-1 gap-4 border-t border-slate-300 py-12 md:grid-cols-3 md:gap-8 lg:grid-cols-3 lg:py-20 xl:grid-cols-4"
      >
        <div class="flex flex-shrink-0 flex-col">
          <StoreLogo class="mb-4" />
          <BaseTypography>
            <p class="mb-6 text-sm leading-none">Copyright © 2023 Thunder</p>
          </BaseTypography>

          <!-- Social -->
          <div class="flex items-center gap-x-4">
            <a
              href="https://github.com/gromovoy88/nuxt-commerce"
              aria-label="Github"
              class="flex h-8 w-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-800 opacity-50 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:bg-gray-100"
            >
              <Icon
                name="tabler:brand-github-filled"
                class="text-xl text-white dark:text-gray-800"
              />
            </a>
          </div>
        </div>

        <div class="flex flex-col sm:ml-0">
          <BaseTypography variant="caption">
            <h2 class="mb-6">Company</h2>
          </BaseTypography>

          <NuxtLink :to="localePath(getCmsPageUrl('about-us'))">
            <span>{{ 'About us' }}</span>
          </NuxtLink>
        </div>

        <div class="flex flex-col">
          <BaseTypography variant="caption">
            <h2 class="mb-6">Support</h2>
          </BaseTypography>

          <NuxtLink
            :to="
              localePath(
                getCmsPageUrl('privacy-policy-cookie-restriction-mode')
              )
            "
          >
            <span>
              {{ 'Privacy Policy' }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
