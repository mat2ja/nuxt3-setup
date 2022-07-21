<script lang="ts" setup>
import { NNotificationProvider, NMessageProvider } from 'naive-ui';
</script>

<template>
  <n-notification-provider>
    <n-message-provider>
      <div bg="gray-50" min-h="100vh" w="100vw">
        <div class="max-w-4xl mx-auto px-4 py-6">
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </div>
      </div>
    </n-message-provider>
  </n-notification-provider>
</template>
