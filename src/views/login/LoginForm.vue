<template>
  <main class="form-signin w-100 m-auto">
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please Login</h1>

    <div class="form-floating">
      <input v-model="data.email" name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input v-model="data.password" name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
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

<script lang="ts">
    import {reactive, SetupContext} from 'vue';
    import axios from 'axios';

export default {
    name: 'LoginForm',
    emits: ['loginData'],
    setup(props: any, context: SetupContext) {
       const data = reactive({
          email: '',
          password: ''
       });
       const notify = reactive({
        message: '',
        type: ''
         });

       const submit = async () => {

         const response = await axios.post('login', data);

          await context.emit('loginData', response.data);

          notify.type = 'success';
            notify.message = 'Login success';
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