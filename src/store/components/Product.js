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
    async getProducts({ commit }, limit) {
      let api_endpoint = `https://fakestoreapi.com/products`;
      if (limit) {
        api_endpoint += `?limit=${limit}`;
      }
      console.log(api_endpoint);
      let res = await axios.get(api_endpoint);

      commit("setProducts", res.data);
    },
    async getProduct({ commit }, id) {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      commit("setProduct", res.data);
    },
    async getRelatedProducts({ commit }, category) {
      const LIMIT = 4; //default limit
      let res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}?limit=${LIMIT}`
      );
      commit("setProducts", res.data);
    },
  },
};
