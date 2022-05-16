import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { reactive } from '@nuxtjs/composition-api'


export const useUserStore = defineStore('user', () => {

  const user = reactive(useLocalStorage('user', {
    username:'',
    email: '',
    token: '',
  }))

  const setUser = (newValue) => {
    user.value = newValue
  }

  const setToken = (newValue) => {
    user.value.token = newValue
  }

  return {
    setUser,
    setToken,
  }
},{ 
  persist:  {
    enabled: true
  }
})
