<script setup lang="ts">
import { ref} from "vue";
import type {Ref} from "vue";
import { v4 as uuidv4 } from 'uuid';
import {useDataStore} from "../store/store";
import { storeToRefs } from "pinia";
import type {User, Person} from "../interfaces/interfaces";
import ModalComponent from "../components/ModalComponent.vue";

const MAX_KIDS = 5;

const store = useDataStore();
const { setData } = useDataStore();
const { userData } = storeToRefs(store);

const isRemoveModalOpened: Ref<boolean> = ref<boolean>(false);
const isSaveModalOpened: Ref<boolean> = ref<boolean>(false);
const itemIdToRemove: Ref<string> = ref<string>("");

const user:Ref<User> = ref<User>(userData.value);

const onSaveData = ():void => {
  setData(user.value);

  openSaveModal();

  setTimeout(() => {
    closeSaveModal();
  }, 1000);
}  

const onAddKid = ():void => {
  const newKid:Person = {
    id: uuidv4(),
    name: "",
    age: 0,
  };

  if(user.value.kids.length >= MAX_KIDS) {
    return;
  } else {
    user.value.kids = [...user.value.kids, newKid];
  }
}

const onRemoveKid = ():void => {
  isRemoveModalOpened.value = false;
  user.value.kids = user.value.kids.filter((kid) => kid.id !== itemIdToRemove.value);
}

const openRemoveModal = (kidId:string) => {
  isRemoveModalOpened.value = true;
  itemIdToRemove.value = kidId;
};

const cancel = () => {
  isRemoveModalOpened.value = false;
  itemIdToRemove.value = "";
};

const openSaveModal = () => {
  isSaveModalOpened.value = true;
};

const closeSaveModal = () => {
  isSaveModalOpened.value = false;
};

</script>

<template>
  <ModalComponent
    :isOpen="isRemoveModalOpened"
    @modal-close="cancel"
    name="login-modal"
  >
    <template #content>
      <div class="modal-content">
        <p>Вы действительно хотите удалить ребенка?</p>

        <div class="modal-footer">
          <button type="button" @click="onRemoveKid">Да</button>
          <button type="button" @click="cancel">Нет</button>
        </div>
      </div>
    </template>
  </ModalComponent>
  <ModalComponent
    :isOpen="isSaveModalOpened"
    @modal-close="closeSaveModal"
    name="login-modal"
  >
    <template #content>
      <div class="modal-content">
        <p>Данные успешно сохранены</p>
      </div>
    </template>
  </ModalComponent>
  <section class="home">
    <h1 class="sr-only">Персональные данные</h1>

    <form action="#" method="POST">
      <div class="personal-data">
        <p class="data-title">Персональные данные</p>
        <div class="form-item">
        <label for="name">Имя</label>
        <input
          type="text"
          id="name"
          v-model="user.name"
        />
      </div>
      <div class="form-item">
        <label for="age">Возраст</label>
        <input
          type="number"
          id="age"
          v-model="user.age"
        />
      </div>
      </div>
      <div class="kids-data">
        <button @click="onAddKid" class="add-kid" type="button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.13332 10.8556C4.50125 10.8555 3.98887 11.3679 3.98887 12C3.98887 12.6321 4.50126 13.1445 5.13332 13.1445L10.8554 13.1445L10.8554 18.8668C10.8554 19.4989 11.3678 20.0113 11.9999 20.0113C12.632 20.0113 13.1444 19.4989 13.1444 18.8668L13.1443 13.1445L18.8667 13.1445C19.4988 13.1445 20.0112 12.6321 20.0112 12C20.0112 11.3679 19.4988 10.8556 18.8667 10.8556L13.1443 10.8556L13.1443 5.13338C13.1443 4.50132 12.632 3.98893 11.9999 3.98893C11.3678 3.98893 10.8554 4.50131 10.8554 5.13338L10.8554 10.8556L5.13332 10.8556Z"/>
        </svg>
        Добавить ребенка</button>
      </div>
      <div v-if="user.kids.length" class="kids-inner">
        <p class="data-title">Дети (макс. 5)</p>
        <ul class="kids-list">
          <li class="kids-item" v-for="kid in user.kids" :key="kid.id">
            <div class="form-item">
              <label for="name">Имя</label>
              <input
                type="text"
                id="name"
                v-model="kid.name"
              />
            </div>
            <div class="form-item">
              <label for="age">Возраст</label>
              <input
                type="number"
                id="age"
                v-model="kid.age"
              />
            </div>
            <button @click="openRemoveModal(kid.id)" class="remove-kid" type="button">
              Удалить
            </button>
          </li>
        </ul>
      </div>
      <button @click.prevent="onSaveData" class="save" type="submit">Сохранить</button>
    </form>
  </section>
</template>

<style scoped>
.home {
  width: 45%;
  margin: 0 auto;
  padding: 0;
  margin-top: 27px;
}

.personal-data,
.kids-data {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

.personal-data {
  margin-bottom: 45px;
}

.kids-data {
  position: relative;
}

.add-kid {
  position: absolute;
  top: -15px;
  right: 0;
  width: 204px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  box-shadow: none;
}

.add-kid svg {
  margin-right: 5px;
  fill: var(--color-primary);
}

.add-kid:hover,
.add-kid:focus {
  background-color: var(--color-primary);
  color: #ffffff;
}

.add-kid:hover svg,
.add-kid:focus svg {
  fill: #ffffff;
}

.save,
.modal-footer button {
  color: #ffffff;
  background-color:var(--color-primary);
  border: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1.5;
  margin-top: 20px;
  border: 2px solid transparent;
}

.save:hover,
.save:focus,
.modal-footer button:hover,
.modal-footer button:focus {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.data-title {
  font-size: 16px;
  line-height: 1.5;
  color: #111111;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
}

.form-item {
  width: 100%;
  max-width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  border: 1px solid #1111117A;
  margin-bottom: 10px;
}

.form-item label {
  color: #1111117A;
  font-size: 13px;
  line-height: 1.5;
  padding: 0 7px;
}

.form-item input {
  border: none;
  font-size: 14px;
  line-height: 1.5;
  padding: 2px 5px;
}

.kids-list {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  max-width: 100%;
}

.kids-item {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}

.kids-item .form-item {
  margin-right: 20px;
  width: 260px;
}

.remove-kid {
  border: none;
  box-shadow: none;
  padding: 5px;
  background-color: transparent;
  border-radius: 0;
  color: var(--color-primary);
  font-size: 14px;
  line-height: 1.5;
  margin-top: -12px;
}

.modal-content {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-content p {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

.modal-footer {
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-footer button {
  margin: 20px;
  padding: 10px 30px;
}

@media (max-width: 768px) {
  .home {
    width: 100%;
    max-width: 100%;
    margin: 0 40px;
  }

  .kids-item .form-item {
    width: auto;
  }
}

 @media (max-width: 500px) {
  .personal-data {
    margin-bottom: 100px;
  }

  .kids-item  {
    flex-wrap: wrap;
  }

  .add-kid {
    top: -50px;
  }
} 
</style>
