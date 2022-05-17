<template>
  <Nuxt />
</template>
<script>
import { useRouter } from '@nuxtjs/composition-api';
import { useUserStore } from '@/store/user';

export default {
  setup(){
    const { getToken } = useUserStore();
    const router = useRouter();
    if (getToken !== '') {
      router.push('/main')
    }
  }
};
</script>