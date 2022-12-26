import VueRouter from "vue-router";
import Vue from "vue";
import ProductDetail from "../components/Product/ProductDetail.vue";
import Home from "../components/Home.vue";
import Shop from "../components/Shop.vue";
import Cart from "../components/Cart/Cart.vue";
import Checkout from "../components/Checkout/Checkout.vue";
import Login from "../components/Auth/Login.vue";

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
    // beforeEnter: (to, from, next) => {
    //   //checkout page m lr khin work
    //   //next() so tr checkout page route
    //   // console.log("checkout middleware");
    //   // let auth = localStorage.getItem("auth");
    //   // if (auth) {
    //   //   next();
    //   // } else {
    //   //   next("/login");
    //   // }
    // },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
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
//global middleware
// bl page ma m lr khin work
router.beforeEach((to, from, next) => {
  //write middleware before next
  //next m pr yin bl page ma a loat m loat
  //next() so tr twr chin tae route
  if (to.name === "cart" || to.name === "checkout") {
    let auth = localStorage.getItem("auth");
    if (!auth) {
      next({ name: "login" });
    }
  }
  next();
});
export default router;
