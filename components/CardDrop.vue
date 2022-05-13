<template>
  <div class="card">
      <slot />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'CardDrop',
  setup() {
        
  },
})
</script>


<style scoped>
.card {
  background: #1f1f23;
  padding:1.4rem;
  margin: 1rem 1rem 0;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
}
</style>
