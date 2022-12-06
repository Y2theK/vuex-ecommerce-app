import Vue from "vue";
import Vuex from "vuex";
import Product from "./components/Product";
import Category from "./components/Category";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    Product,
    Category,
  },
});
