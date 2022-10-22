import { createRouter, createWebHistory } from "vue-router";
import FilmeAladdinView from "@/views/FilmeAladdinView.vue";
import ProfView from "@/views/ProfView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/filme_aladdin", name: "Filme", component: FilmeAladdinView },
    {path: "/perfil_usuario", name: "Perfil", component: ProfView },
    {path: "/", name: "Home", component: HomeView },
  ],
});

export default router;
