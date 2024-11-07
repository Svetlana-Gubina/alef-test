import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { User } from '../interfaces/interfaces';
import { v4 as uuidv4 } from 'uuid';

export const useDataStore = defineStore('data', () => {
  const defaultUser = {
    id: uuidv4(),
    name: '',
    age: 0,
    kids: [],
  };
  const userData: Ref<User> = ref<User>(defaultUser);

  const setData = (newData: User) => {
    userData.value = newData;
  };

  function $reset() {
    userData.value = defaultUser;
  }

  return { userData, setData, $reset };
});
