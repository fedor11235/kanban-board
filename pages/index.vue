<template>
  <div class='index'>
    <div class='container-index'>
      <div class='authorization'>
        <NuxtLink class='link' to='/authorization'>Авторизироваться</NuxtLink>
      </div>
      <div class='registration'>
        <NuxtLink class='link' to='/registration'>Регистрироваться</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'privateAuth',
}
</script>

<style scoped>
.index {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background: #383a42;
  height: 100vh;
}

.authorization{
  background: #f88b4a;
  padding: 1rem;
  margin: 1rem;
}

.registration{
  background: #3c8bbe;
  padding: 1rem;
  margin: 1rem;
}

.link {
  text-decoration: none;
  color:white;
  font-size: 30px;
}
</style>
