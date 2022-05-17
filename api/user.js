import { useContext } from '@nuxtjs/composition-api'

export const apiUser = () =>  {

  const { $api } = useContext()

  const userCreate = async (payload) => {
    const { username, email, password } = payload
    return await $api.post('/users/create/', { username, email, password });
  }

  const useLogin = async (payload) => {
    const { username, password } = payload
    return await $api.post('/users/login/', { username, password });
  }

  const refreshToken = async (token) => {
    return await $api.get('/users/refresh_token/', token);
  }

  return {
    userCreate,
    useLogin,
    refreshToken,
  }
  
};