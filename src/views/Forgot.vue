<template>
  <main class="form-signin w-100 m-auto">
    <div v-if="notify.type" :class="`alert alert-${notify.type}`" role="alert">
        {{ notify.message }}
    </div>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please insert your email</h1>

    <div class="form-floating">
      <label for="floatingInput">Email address</label>
    </div>

    <button class="signin-button w-100 btn btn-lg btn-primary mt-3" type="submit">Submit</button>
  </form>
</main>
</template>

<script>
import { reactive, ref } from 'vue';
import axios from 'axios';


export default {
    name: 'Forgot',
    setup() {
       const email = ref();
       const notify = reactive({
        message: '',
        type: ''
         });

         const submit = async () => {
            try {
            await axios.post('forgot', {
                 email: email.value
             }, {
                 withCredentials: true
             });

             notify.type = 'success';
                notify.message = 'Check your email';

            } catch (error) {
                notify.type = 'danger';
                notify.message = 'Something went wrong';
            }
         }

       return {
          email,
          submit,
          notify
       }
    }

}
</script>

<style>

</style>