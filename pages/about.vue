<script lang="ts" setup>
import { NH1 } from 'naive-ui';
import { useMeStore } from '~~/store/me';

const store = useMeStore();
const counter = useState('counter');
</script>

<template>
  <div>
    <NH1> {{ $t('about.about') }} {{ store.name }} </NH1>
    {{ counter }}
  </div>
</template>
