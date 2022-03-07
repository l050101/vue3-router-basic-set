import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home-page.vue";
import About from "@/pages/About-page.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;