<template>
  <Nuxt />
</template>
<script>
import { useUserStore } from '@/store/user';

export default {
  async created() {
    const userStore = useUserStore();

    if (userStore.user.token !== '') {
      this.$router.replace({ path: '/main' });
    }
  },
};
</script>