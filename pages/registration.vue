<template>
  <div class="auth">
    <div class="container-form">
      <form class="form">
        <h1 class="title">Регистрация</h1>
        <input 
          v-model.trim="form.username" 
          class="input" 
          placeholder="Введите своё имя"
          @change="handlerUsername"
          
        />
        <input 
          v-model.trim="form.email" 
          class="input" 
          placeholder="Введите свой емэил"
          @change="handlerEmail"
          
        />
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
  name: 'RegistrationPage',


  setup() {
    const user = useUserStore()

    const form = reactive({
      username: '',
      email: '', 
      password: '',
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
        const respons = await auth.userCreate(this.$axios, form)
        if(respons.status === 201) {
            user.user.username = respons.data.username
            user.user.email = respons.data.email
            user.user.token = respons.data.token
        }

        if (respons.status === 400) {
            alert(respons.data)
        }
      }
    }

    function handlerEmail(){
    //   errorEmail.value = !ruleEmail.test(form.email)
    }
    function handlerPassword(){
    //   errorPassword.value = !rulePassword.test(form.password)
    }

    function handlerUsername(){}

    return {
      form,
      handlerEmail,
      handlerPassword,
      handlerUsername,
      handlerSubmit,
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
    background: #3c8bbe;
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
    background: #f5c852;;
    border:0;
    outline:none;
    color: #dad7d9;
    padding: 1rem;
    margin: 0.5rem;
    width: 17rem;
  }

</style>
