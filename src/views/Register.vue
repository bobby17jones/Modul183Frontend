<template>
    <main class="form-signin w-100 m-auto">
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please Register</h1>

    <div class="form-floating">
      <input v-model="data.first_name" type="text" class="form-control" placeholder="Firstname">
      <label>Firstname</label>
    </div>
    <div class="form-floating">
      <input v-model="data.last_name" type="text" class="form-control" placeholder="Lastname">
      <label>Lastname</label>
    </div>
    <div class="form-floating">
      <input v-model="data.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input v-model="data.password" type="password" class="form-control" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating">
      <input v-model="data.password_confirm" type="password" class="form-control" placeholder="Password Confirm">
      <label>Password</label>
    </div>

    <button class="signin-button w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; Blablabla</p>
  </form>
</main>
</template>

<script lang="ts">
  import {reactive} from 'vue';
  import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    name: 'Login',
    setup() {
       const data = reactive({
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          password_confirm: '',
       });

       const router = useRouter();

       const submit = async () => {
          await axios.post('register', data);

          await router.push('/login');
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