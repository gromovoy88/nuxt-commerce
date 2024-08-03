<template>
  <section class="py-10 lg:py-[70px]">
    <div class="-mx-4 flex flex-wrap">
      <div class="flex w-full items-center px-4 lg:w-5/12">
        <div class="hero-content">
          <h1
            class="mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]"
          >
            {{ $t('messages.landing.title') }}
          </h1>
          <p class="mb-8 max-w-[480px] text-base">
            {{ $t('messages.landing.description') }}
          </p>
        </div>
      </div>
      <div class="hidden px-4 lg:block lg:w-1/12" />
      <div class="w-full px-4 lg:w-6/12">
        <div class="lg:ml-auto lg:text-right">
          <div class="relative z-10 inline-block pt-11 lg:pt-0">
            <NuxtImg
              src="/images/hero.png"
              width="491"
              height="515"
              alt="Hero image"
              class="max-w-full lg:ml-auto"
              format="webp"
              quality="50"
              lazy="true"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
