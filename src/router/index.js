import VueRouter from "vue-router";
import Vue from "vue";
import ProductDetail from "../components/ProductDetail.vue";
import Home from "../components/Home.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/products/:id",
    name: "product-detail",
    component: ProductDetail,
  },
];

const router = new VueRouter({
  // history: createWebHistory(process.env.BASE_URL),
  mode: "history",
  routes,
});
export default router;
