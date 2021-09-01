import { createRouter, createWebHistory } from "vue-router";
import Welcome from "@/views/Welcome.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/main",
    name: "Main",
    component: () =>
      import("@/views/Main.vue")
  },
  {
    path: "/result",
    name: "Result",
    component: () =>
      import("@/views/Result.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
