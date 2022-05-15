<template>
  <div class='card'>
      <slot />
  </div>
</template>

<script>
export default {
  name: 'CardDrop',
}
</script>


<style scoped>
.card {
  background: #1f1f23;
  margin: 1rem 1rem 0;
}
.card :hover{
  cursor: move;
}
</style>
