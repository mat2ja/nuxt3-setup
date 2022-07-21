<script lang="ts" setup>
useState('counter', () => 2);
</script>

<template>
  <div bg="gray-50" min-h="100vh" w="100vw">
    <div class="max-w-4xl mx-auto px-4 py-6">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
