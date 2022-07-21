<script setup lang="ts">
import { NInput, NButton, NCard, useMessage } from 'naive-ui';
import { useStarCreate } from '~~/composables/api/stars';

const star = reactive({
  name: '',
  constellation: '',
});

const resetData = () => {
  star.name = '';
  star.constellation = '';
};

const { data: addedStar, isLoading, mutate: addStar } = useStarCreate();

const message = useMessage();

const onStarSubmit = async () => {
  console.log('star :>> ', star);
  if (star.name && star.constellation) {
    addStar(star, {
      onSuccess: (res) => {
        console.log('star added :>> ', res);
        message.success('Star added successfully');
        resetData();
      },
    });
  } else {
    message.error('Please fill all the fields');
  }
};
</script>

<template>
  <div space-y-8>
    <form @submit.prevent="onStarSubmit" space-y-4>
      <div flex gap-4 justify-center>
        <NInput size="large" v-model:value="star.name" placeholder="name" />
        <NInput
          size="large"
          v-model:value="star.constellation"
          placeholder="constellation"
        />
      </div>
      <NButton
        size="large"
        type="primary"
        secondary
        attr-type="submit"
        :loading="isLoading"
      >
        {{ $t('new.btnAdd') }}
      </NButton>
    </form>
    <NCard title="Last added" v-if="addedStar">
      <pre>{{ addedStar }}</pre>
    </NCard>
  </div>
</template>

<style lang="scss" scoped></style>
