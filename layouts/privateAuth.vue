<template>
  <Nuxt />
</template>
<script>
import { useUserStore } from '@/store/user';

export default {
  async created() {
    const user = useUserStore();

    if (user.user.token !== '') {
      this.$router.replace({ path: '/main' });
    }
  },
};
</script>