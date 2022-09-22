import { createStore, ActionContext} from "vuex";

export default createStore({
  state: {
    auth: false,
  },
  mutations: {
    setAuth(state: { auth: boolean }, auth: boolean) {
      state.auth = auth;
    }
  },
  actions: {
    setAuth(Context: ActionContext<any, any>, auth: boolean) {
      Context.commit("setAuth", auth);
    }
  },
  modules: {},
});
