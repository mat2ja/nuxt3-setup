<script lang="ts" setup>
import { NButton, NInput, NList, NListItem, NThing } from 'naive-ui';
import { useStars } from '~~/composables/api/stars';
import { useUserStore } from '~~/store/user';

const store = useUserStore();
const { data: stars, refetch: refresh, isLoading } = useStars();

const changeNameHandler = (value: string) => {
  store.changeName(value);
};
</script>

<template>
  <div>
    <h1>Homepage</h1>
    <div flex flex-col gap-4>
      <p>{{ $t('about.greeting') }} {{ store.name }}</p>
      <NInput type="text" :value="store.name" @input="changeNameHandler" />
      <div flex gap-2 items-center>
        <NButton size="small" @click="refresh()">Refetch</NButton>
      </div>
      <p v-if="isLoading">Loading...</p>
      <NList bordered v-if="stars">
        <NListItem v-for="star in stars" :key="star.id">
          <NThing :title="star.name" :description="star.constellation" />
        </NListItem>
      </NList>
    </div>
  </div>
</template>
