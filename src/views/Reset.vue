<template>
  <main class="form-signin w-100 m-auto">
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please reset your password</h1>

    <div class="form-floating">
      <input v-model="data.password" type="password" class="form-control" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating">
      <input v-model="data.password_confirm" type="password" class="form-control" placeholder="Password Confirm">
      <label>Password</label>
    </div>

    <button class="signin-button w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</main>
</template>

<script>
    import {reactive, router} from 'vue';
    import axios from 'axios';
    import { useRoute, useRouter } from 'vue-router';

export default {
    name: 'Reset',
    setup() {
       const data = reactive({
          password: '',
          password_confirm: '',
       });

       const route = useRoute(); //define url parameters
       const router = useRouter(); //define redirect

       const submit = async () => {
          await axios.post('reset', {
            ...data,
            token: route.params.token
          });

          await router.push('/login');
       }

       return {
          data,
          submit
       }
    }


}
</script>