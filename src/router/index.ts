import { createRouter, createWebHistory } from "vue-router";
//@ts-ignore
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
    //@ts-ignore
      import("@/views/Main.vue")
  },
  {
    path: "/result",
    name: "Result",
    component: () =>
    //@ts-ignore
      import("@/views/Result.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
