import VueRouter from "vue-router";
import Vue from "vue";
import ProductDetail from "../components/Product/ProductDetail.vue";
import Home from "../components/Home.vue";
import Shop from "../components/Shop.vue";
import Cart from "../components/Cart/Cart.vue";
import Checkout from "../components/Checkout/Checkout.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/cart/checkout",
    name: "checkout",
    component: Checkout,
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
