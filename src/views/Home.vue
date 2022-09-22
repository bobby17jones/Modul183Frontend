<template>
  <div class="container mt-5 text-center">
    <h3>{{ auth ? message : 'You are not logged in' }}</h3>
  </div>
</template>

<script lang="ts">
import { onMounted, ref , computed} from "vue";
import axios from "axios";
import { useStore } from "vuex";

export default {
  name: "Home",
    //verify if user is logged in
    setup() {
        const message = ref('You are not authenticated');
        const store = useStore();
        const auth = computed(() => store.state.auth);

        onMounted(async () => {
          try {
            const {data} = await axios.get('user',{
                withCredentials: true,
            });  
            message.value = `Hey ${data.first_name} ${data.last_name}`;
            await store.dispatch('setAuth', true);
          } catch (error) {
            await store.dispatch('setAuth', false);
          }
        });
        return {
            message,
            auth
        }
    }
}
</script>
