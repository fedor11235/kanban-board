<template>
  <div class='error'>
    <h1 class='error-title link' v-if='error.statusCode === 404'>Страница не найдена</h1>
    <h1 class='error-title link' v-else>Произошла ошибка</h1>
    <NuxtLink class='error-link link' to='/'>Кликни для возврата на главную страницу</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: #383a42;
  height: 100vh;
}

.error-title{
  background: #f5c852;
  padding: 1rem;
  margin: 1rem;
}

.error-link{
  background: #4ca468;
  padding: 1rem;
  margin: 1rem;
}

.link {
  text-decoration: none;
  color:white;
  font-size: 30px;
}
</style>