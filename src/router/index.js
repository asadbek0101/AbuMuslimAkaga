import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage";
import TarjimaPage from "@/views/TarjimaPage";
import MetodikPage from "@/views/MetodikPage";
import FanOyliPage from "@/views/FanOyliPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/tarjimahol",
    name: "TarjimaiHol",
    component: TarjimaPage,
  },
  {
    path: "/metodik",
    name: "Metodik",
    component: MetodikPage,
  },
  {
    path: "/fanoyligi",
    name: "FanOyligi",
    component: FanOyliPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
