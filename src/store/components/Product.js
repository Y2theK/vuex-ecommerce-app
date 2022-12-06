import axios from "axios";
export default {
  state: {
    products: [],
    product: {},
  },
  getters: {
    Products(state) {
      return state.products;
    },
    Product(state) {
      return state.product;
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
  },
  actions: {
    async getProducts({ commit }) {
      let res = await axios.get("https://fakestoreapi.com/products");
      commit("setProducts", res.data);
    },
    async getProduct({ commit }, id) {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      commit("setProduct", res.data);
    },
  },
};
