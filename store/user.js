import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { reactive, computed } from '@nuxtjs/composition-api'


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

  const getToken = computed(() => user.value.token)

  return {
    user,
    setUser,
    setToken,
    getToken
  }
},{ 
  persist:  {
    enabled: true
  }
})
