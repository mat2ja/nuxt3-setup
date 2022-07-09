<script lang="ts" setup>
import { useTypedRouter } from '~~/generated';
const { router } = useTypedRouter();
</script>

<template>
  <div>
    <nav class="flex gap-4 items-center">
      <NuxtLink to="/"> {{ $t('home') }} </NuxtLink>
      <NuxtLink to="/about"> {{ $t('about.about') }} </NuxtLink>
      <p class="font-semibold" @click="router.push({ name: 'about' })">
        {{ $t('about.about') }}
      </p>
    </nav>
    <slot />
  </div>
</template>
