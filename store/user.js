import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { reactive, ref } from "@nuxtjs/composition-api"


export const useUserStore = defineStore('user', () => {

  const user = reactive(useLocalStorage('user', {
    username:'',
    email: '',
    token: '',
  }))

  return {
    user,
  }
},{ 
  persist:  {
    enabled: true
  }
})
