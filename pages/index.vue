<script lang="ts" setup>
import { NButton, NInput } from 'naive-ui';
import { useUserStore } from '~~/store/user';

const store = useUserStore();
const counter = useState<number>('counter');

const { data, pending, refresh } = useFetch('/api/stars');

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
        <NButton ml-6 size="small" @click="refresh()">Refetch</NButton>
      </div>
      <p v-if="!data && pending">Loading...</p>
      <pre v-if="data" text="orange-700">{{ data }}</pre>
      <p v-if="pending">pending...</p>
    </div>
  </div>
</template>
