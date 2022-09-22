<template>
    <main class="form-signin w-100 m-auto">
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please Login</h1>

    <div class="form-floating">
      <input v-model="data.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input v-model="data.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

    <div class="mt-3">
      <router-link to="/forgot">Forgot your password?</router-link>
    </div>

    <button class="signin-button w-100 btn btn-lg btn-primary mt-3" type="submit">Login</button>
    <p class="mt-3 text-muted">&copy; Blablabla</p>
  </form>
</main>
</template>

<script>
    import {reactive} from 'vue';
    import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    name: 'Login',
    setup() {
       const data = reactive({
          email: '',
          password: ''
       });

       const router = useRouter();

       const submit = async () => {
         const response = await axios.post('login', data, {
             withCredentials: true
          });

          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;

          await router.push('/');
       }

       return {
          data,
          submit
       }
    }
}
</script>

<style>
.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.signin-button {
    margin: auto;
  }
</style>