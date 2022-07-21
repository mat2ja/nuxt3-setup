<script lang="ts" setup></script>

<template>
  <div>
    <nav class="flex gap-4 items-center" mb-4>
      <NuxtLink to="/"> {{ $t('home') }} </NuxtLink>
      <NuxtLink to="/about"> {{ $t('about.label') }} </NuxtLink>
      <NuxtLink to="/new"> {{ $t('new.label') }} </NuxtLink>
    </nav>
    <slot />
  </div>
</template>
