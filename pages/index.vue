<script lang="ts" setup>
import { NButton, NSpace, NInput } from 'naive-ui';
import { useMeStore } from '~~/store/me';

const store = useMeStore();
const counter = useState<number>('counter');

const { data, pending, refresh } = useFetch(
  () => `https://jsonplaceholder.typicode.com/todos/${counter.value}`
);

const changeNameHandler = (value: string) => {
  store.changeName(value);
};
</script>

<template>
  <div>
    <h1>Homepage</h1>
    <div>
      <p>{{ $t('about.greeting') }} {{ store.name }}</p>
      <NInput type="text" :value="store.name" @input="changeNameHandler" />
      <n-space align="center">
        <NButton
          circle
          strong
          secondary
          type="warning"
          size="large"
          @click="counter--"
        >
          -
        </NButton>
        <div class="font-mono font-semibold text-xl min-w-3ch text-center">
          {{ counter }}
        </div>
        <NButton circle strong type="warning" size="large" @click="counter++">
          +
        </NButton>
        <NButton size="small" @click="refresh()">Refetch</NButton>
      </n-space>
      <p v-if="!data && pending">Loading...</p>
      <pre v-if="data" text="orange-700">{{ data }}</pre>
      <p v-if="pending">pending...</p>
    </div>
  </div>
</template>
