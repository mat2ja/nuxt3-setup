<script lang="ts" setup>
import { NH1 } from 'naive-ui';
import { useUserStore } from '~~/store/user';

const store = useUserStore();
const counter = useState('counter');
</script>

<template>
  <div>
    <NH1> {{ $t('about.label') }} {{ store.name }} </NH1>
    <p>{{ counter }}</p>
  </div>
</template>
