<script lang="ts" setup>
import { NH1 } from 'naive-ui';
import { useUserStore } from '~~/store/user';

const store = useUserStore();
</script>

<template>
  <div>
    <NH1> {{ $t('about.label') }} {{ store.name }} </NH1>
  </div>
</template>
