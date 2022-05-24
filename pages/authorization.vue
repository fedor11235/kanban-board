<template>
  <div class='auth'>
    <div class='container-form'>
      <form class='form'>
        <h1 class='title'>Авторизация</h1>
        <input
          v-model='form.username'
          class='input'
          placeholder='Введите своё имя'
          @change='handlerUsername'
        />
        <input
          v-model='form.password'
          class='input'
          placeholder='Введите пароль'
          @change='handlerPassword'
        />
        <button class='input-button' @click.prevent='handlerSubmit'>
          Отправить
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref, useContext } from '@nuxtjs/composition-api';
import { useUserStore } from '@/store/user';
import { apiUser } from '@/api/user';

export default {
  name: 'AuthorizationPage',
  layout: 'privateAuth',

  setup() {
    const { $api } = useContext()
    const { setToken } = useUserStore();
    const { useLogin } = apiUser()

    const form = reactive({
      username: '',
      password: '',
    });

    let errorUsername = ref(false);
    let errorPassword = ref(false);

    // const ruleUsername = /^(?=.{1,150}$)[\w.@+-]+$/g;
    // const rulePassword = /^(?=.{1,128}$)[\w.@+-]+$/g;

    async function handlerSubmit() {
      if ((form.username === '') | (form.password === '')) {
        alert('Заполните все поля');
      } else if (!(!errorUsername.value && !errorPassword.value)) {
        alert('Вы ввели неверное имя пользователя или неверный пароль');
      } else {
        try {
          const respons = await useLogin(form);
          $api.defaults.headers.common['Authorization'] = `JWT ${respons.token}`;
          setToken(respons.token)
          this.$router.replace({ path: '/main' });
        } catch (err) {
          alert(err);
        }
      }
    }

    function handlerPassword() {
      // errorPassword.value = !rulePassword.test(form.password);
    }

    function handlerUsername() {
      // errorUsername.value = !ruleUsername.test(form.username);
    }

    return {
      form,
      handlerPassword,
      handlerSubmit,
      handlerUsername,
      errorUsername,
    };
  },
};
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
  border: 0;
  outline: none;
  color: #dad7d9;
  padding: 1rem;
  margin: 0.5rem;
  width: 15rem;
}

.input:placeholder {
  color: #717072;
}

.title {
  padding: 0.5rem;
  background: #f88b4a;
  color: white;
  margin: 0.5rem;
  width: 16rem;
  text-align: center;
}
.input-button {
  background: #4ca468;
  border: 0;
  outline: none;
  color: #dad7d9;
  padding: 1rem;
  margin: 0.5rem;
  width: 17rem;
  cursor: pointer;
}


</style>
