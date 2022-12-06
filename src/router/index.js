import VueRouter from "vue-router";
import Vue from "vue";
import ProductDetail from "../components/ProductDetail.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/products/:id",
    name: "product-detail",
    component: ProductDetail,
  },
];

const router = new VueRouter({
  // history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
