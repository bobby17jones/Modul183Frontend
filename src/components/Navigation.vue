<template>
  <nav class="navbar navbar-expand-md navbar-primary bg-primary mb-4">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link text-white" aria-current="page">Home</router-link>
        </li>
       
      </ul>
      <form class="d-flex" role="search" v-if="auth">
        <router-link to="/" class="link btn btn-outline-light" @click="logout">Logout</router-link>
      </form>

      <form class="d-flex" role="search" v-if="!auth">
        <router-link to="/login" class="link btn btn-outline-light">Login</router-link>
        <router-link to="/register" class="link btn btn-outline-light">Register</router-link>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
  import { computed } from 'vue';
  import axios from 'axios';
  import { useStore } from 'vuex';

export default {
  name: "Navigation",
  //verify if user is logged in
  setup() {
    const store = useStore();
    const auth = computed(() => store.state.auth);

    const logout = async () => {
      await axios.post('logout', {}, {
        withCredentials: true
      });
      await store.dispatch('setAuth', false);
    }

    return {
      auth,
      logout
    }
  }

}

</script>

<style>
.link {
  margin-left: 10px;
}
</style>
