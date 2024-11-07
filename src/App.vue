<script setup lang="ts">
import MainHeader from './components/MainHeader.vue';
import MainFooter from "./components/MainFooter.vue"
</script>

<template>
  <MainHeader />
  <main class="page-main">
    <router-view />
  </main>
  <MainFooter />
</template>

<style scoped>
.page-main {
  width: 100%;
  max-width: 100%;
  display: flex;
  min-height: calc(100vh - 76px - 76px);
  flex: 1;
}
</style>
