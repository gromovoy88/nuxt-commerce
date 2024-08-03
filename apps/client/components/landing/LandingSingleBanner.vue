<template>
  <div class="mx-auto rounded-md bg-white shadow-sm">
    <div class="block items-center justify-between md:flex lg:flex">
      <div class="p-4 md:p-10">
        <p class="text-base leading-none text-gray-800">
          {{ $t('messages.landing.bannerSaveUp') }}
        </p>
        <p class="py-4 text-3xl font-semibold leading-9 text-gray-800">
          {{ $t('messages.landing.bannerTitle') }}
        </p>
        <p class="text-base leading-normal text-gray-600">
          {{ $t('messages.landing.description') }}
        </p>
      </div>
      <div class="p-4 md:p-10">
        <NuxtImg
          src="/images/ec2.png"
          class="h-full w-full"
          alt="Demo Product Banner"
          format="webp"
          quality="50"
          height="247"
          width="247"
          lazy="true"
        />
      </div>
    </div>
  </div>
</template>
