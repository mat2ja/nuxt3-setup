import { set } from '@vueuse/core';
import { acceptHMRUpdate, defineStore } from 'pinia';

export const useUserStore = defineStore('me', () => {
  const name = ref('Matija');

  const changeName = (newName: string) => set(name, newName);

  return {
    name,
    changeName,
  };
});

// Do I need this?
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
