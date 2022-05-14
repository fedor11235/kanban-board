<template>
  <Nuxt/>
</template>
<script>
import { useUserStore } from '@/store/user'
// import { ref, onMounted } from '@nuxtjs/composition-api'

export default {
  created () {
    const user = useUserStore()
    if (user.user.username === ''){
      console.log(user.user)
      this.$router.replace({path:"/"})
    }
  }
}

// export default {
//   setup(){
//     const user = useUserStore()
//     onMounted(() => {
//       this.$router.replace({path:"/"})
//     })
//     return user
//   }
// }
</script>