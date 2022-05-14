<template>
  <div class="auth">
    <div class="container-form">
      <form class="form">
        <h1 class="title">Авторизация</h1>
        <input 
          v-model.trim="form.username" 
          class="input" 
          placeholder="Введите своё имя"
          @change="handlerUsername"
          
        />
        <!-- :class="$v.form.email" -->
        <input 
          v-model.trim="form.password" 
          class="input" 
          placeholder="Введите пароль" 
          @change="handlerPassword"
        />
        <button class="input-button" @click.prevent="handlerSubmit">Отправить</button>
      </form>
      <div v-if="errorEmail || errorPassword" class="error">
          Вы ввели не правильно пароль или емэил
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@nuxtjs/composition-api"
import { useUserStore } from '@/store/user'
import auth from "@/api/user"

export default {
  name: 'AuthorizationPage',
  layout: 'test',


  setup() {
    const user = useUserStore()

    const form = reactive({
      username: '',
      password: ''
    });

    const errorEmail = ref(false)
    const errorPassword = ref(false)

    const ruleEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/g;
    const rulePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/g


    async function handlerSubmit(){
      if(form.email ==="" | form.password ==="") {
        alert("Заполните все поля")
        return
      }
      else if(!(!errorEmail.value && !errorPassword.value)){
        return
      }
      else {
        const respons = await auth.useLogin(this.$axios, form)
        console.log(respons)
        if(respons.status === 200) {
            user.user.token = respons.data.token
            this.$axios.defaults.headers.common['Authorization'] = `JWT ${respons.data.token}`
            this.$router.replace({path:"/main"})
        }

        if (respons.status === 400) {
            alert(respons.data)
        }
      }
    }

    function handlerPassword(){
    //   errorPassword.value = !rulePassword.test(form.password)
    }

    function handlerUsername(){}

    return {
      form,
      handlerPassword,
      handlerSubmit,
      handlerUsername,
      errorEmail,
      errorPassword,
    }
  }
}
</script>

<style scoped>
  .auth {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background: #383a42;
    height: 100vh;
  }

  .container-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #303038;
    height: 30rem;
    width: 30rem;
  }

  .form {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
  }

  .input {
    background: #515051;
    border:0;
    outline:none;
    color: #dad7d9;
    padding: 1rem;
    margin: 0.5rem;
    width: 15rem;
  }

  .input:placeholder {
    color: #717072;
  }

  .title {
    padding:0.5rem;
    background: #f88b4a;
    color:white;
    margin: 0.5rem;
    width: 16rem;
    text-align: center
  }
  .error {
    background: #be3c51;
    color:white;
    width: 15rem;
    padding: 1rem;
    text-align: center
  }
  .input-button {
    background: #4ca468;;
    border:0;
    outline:none;
    color: #dad7d9;
    padding: 1rem;
    margin: 0.5rem;
    width: 17rem;
  }

</style>
