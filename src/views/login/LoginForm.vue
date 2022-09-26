<template>
  <main class="form-signin w-100 m-auto">
  <Form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please Login</h1>

    <div class="form-floating">
      <Field v-model="data.email" :rules="validateEmail" name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <ErrorMessage name="email" class="error"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <Field v-model="data.password" :rules="validatePassword" name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <ErrorMessage name="password" class="error"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="mt-3">
      <router-link to="/forgot">Forgot your password?</router-link>
    </div>

    <button class="signin-button w-100 btn btn-lg btn-primary mt-3" type="submit">Login</button>
    <p class="mt-3 text-muted">&copy; Blablabla</p>
  </Form>
</main>
</template>

<script lang="ts">
    import {reactive, SetupContext} from 'vue';
    import axios from 'axios';
    import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
    name: 'LoginForm',
    components: {
      Form,
      Field,
      ErrorMessage
    },
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

       const validateEmail = async (value: string) => {
        if (!value) {
          return 'Email is required';
        }
        if (!value.includes('@')) {
          return 'Email must be valid';
        }
        return true;
      };

      const validatePassword = async (value: string) => {
        if (!value) {
          return 'Password is required';
        }
        if (value.length < 6) {
          return 'Password must be at least 6 characters';
        }
        const hasNumber = /\d/;
        if (!hasNumber.test(value)) {
          return 'Number is required';'';
        }
        const regex = /[!@#$%^&*(),.?":{}|<>]/;
        if (!regex.test(value)) {
          return 'Special character required';
        }
        return true;
      };

       return {
          data,
          submit,
          validateEmail,
          validatePassword
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

      .error {
        padding: 10px;
        margin: auto;
        color: #ba3939;
        background: #ffe0e0;
        border: 1px solid #a33a3a;
        position: relative;
        z-index: 1;
      }
    </style>