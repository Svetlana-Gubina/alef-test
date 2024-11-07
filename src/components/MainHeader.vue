<script setup lang="ts">

</script>

<template>
 <header class="main-header">
    <div class="logo">
        <router-link to="/">
            <picture>
                <source srcset="/images/logo@2x.png">
                <img src="/images/logo.png" alt="Логотип">
            </picture>
        </router-link>
    </div>
    <nav class="main-nav">
        <router-link to="/">Форма</router-link>
        <router-link to="/preview">Превью</router-link>
    </nav>
 </header>
</template>

<style scoped>
.main-header {
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    padding: 22px 50px;
    min-height: 76px;
    border-bottom: 1px solid #1111117A;
}

.logo {
    width: 175px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 295px;
}

.logo img {
    width: 93px;
    height: 29px;
}

.main-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 276px;
}

@media (max-width: 768px) {
    .main-header {
    flex-direction: column;
  }

  .logo {
    margin-right: 0;
    margin-bottom: 20px;
  }
}

</style>
