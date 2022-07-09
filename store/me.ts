import { set } from '@vueuse/core';
import { acceptHMRUpdate, defineStore } from 'pinia';

export const useMeStore = defineStore('me', () => {
  const name = ref('moharrami');

  const changeName = (newName: string) => set(name, newName);

  return {
    name: readonly(name),
    changeName,
  };
});

// Do I need this?
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMeStore, import.meta.hot));
