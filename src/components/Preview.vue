<script setup lang="ts">
import { ref} from "vue";
import type {Ref} from "vue";

interface Person {
  id: number;
  name:string;
  age: number;
}

interface User extends Person{
  kids: Person[]
}

const user:Ref<User> = ref<User>({
  id: 0,
  name: "",
  age: 0,
  kids: [{
    id: 1,
    name: "Kid1",
    age: 11
  },{
    id: 2,
    name: "Kid2",
    age: 12
  }]
})
</script>

<template>
  <section class="preview">
    <h1 class="sr-only">Просмотр данных</h1>
    <div class="preview-item item-personal">
        <p class="preview-title">Персональные данные</p>
        <span>Ivan</span>,<span>50 лет</span>
    </div>
   <div class="preview-item">
        <p class="preview-title">Дети</p>
        <ul class="kids-list">
            <li class="kids-item" v-for="kid in user.kids" :key="kid.id">
                <span>{{ kid.name }}</span>, <span>{{ kid.age }} лет</span>
            </li>
        </ul>
   </div>
  </section>
  
</template>

<style scoped>
.preview {
  width: auto;
  margin: 0;
  margin-left: 27.5%;
  padding: 0;
  margin-top: 10px;
}

.preview-item {
    margin: 0;
    padding: 0;
}

.preview-item:first-of-type {
    margin-bottom: 60px;
}

.preview-title {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
}

.item-personal span {
    font-size: 16px;
    line-height: 1.5;
    font-weight: bold;
}

.kids-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.kids-item {
    border-radius: 5px;
    background-color: #f1f1f1;
    padding: 10px;
    margin-bottom: 20px;
    width: auto;
}

.kids-item span {
    font-size: 16px;
    line-height: 1.5;
    font-weight: bold;
}
</style>
