import axios from "axios";
export default {
  state: {
    products: [],
  },
  getters: {
    Products(state) {
      return state.products;
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async getProducts({ commit }) {
      let res = await axios.get("https://fakestoreapi.com/products");
      commit("setProducts", res.data);
    },
  },
};
