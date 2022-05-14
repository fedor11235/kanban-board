<template>
  <div>
    <h1 v-if="error.statusCode === 404">Страница не найдена</h1>
    <h1 v-else>Произошла ошибка</h1>
    <NuxtLink to="/">Верняться на главную страницу</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>