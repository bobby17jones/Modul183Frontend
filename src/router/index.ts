import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Home from "@/views/Home.vue";
import Forgot from "@/views/Forgot.vue";
import Reset from "@/views/Reset.vue";

const routes: Array<RouteRecordRaw> = [
  {path: "/login", component: Login},
  {path: "/register", component: Register},
  {path: "/", component: Home},
  {path: "/forgot", component: Forgot},
  {path: "/reset/:token", component: Reset},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
