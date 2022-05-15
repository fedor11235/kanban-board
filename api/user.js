export default {
  async userCreate(axios, payload) {
    const { username, email, password } = payload
    return await axios.post('/users/create/', { username, email, password });
  },
  
  async useLogin(axios, payload) {
    const { username, password } = payload
    return await axios.post('/users/login/', { username, password });
  },
  
  async refreshToken(axios, token) {
    return await axios.get('/users/refresh_token/', token);
  },
};