<template>
  <div class="card">
      <slot />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'CardDrop',
  setup() { },
})
</script>


<style scoped>
.card {
  background: #1f1f23;
  margin: 1rem 1rem 0;
}
</style>
