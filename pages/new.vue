<script setup lang="ts">
import { NInput, NButton } from 'naive-ui';

const star = reactive({
  name: '',
  constellation: '',
});

const addStar = async () => {
  console.log('star :>> ', star);
  if (star.name && star.constellation) {
    const res = await $fetch('/api/stars', {
      method: 'POST',
      body: star,
    });
    console.log('res :>> ', res);
  } else {
    console.log('missing name or constellation');
  }
};
</script>

<template>
  <form @submit.prevent="addStar" space-y-4>
    <div grid grid-cols-2 gap-4>
      <NInput v-model:value="star.name" placeholder="name" />
      <NInput v-model:value="star.constellation" placeholder="constellation" />
    </div>
    <NButton type="primary" attr-type="submit">{{ $t('new.btnAdd') }}</NButton>
  </form>
</template>

<style lang="scss" scoped></style>
