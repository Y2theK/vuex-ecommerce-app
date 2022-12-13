import axios from "axios";
export default {
  namespaced: true,
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
    ProductsTotalCount(state) {
      return state.products.length;
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    emptyProducts(state, emptyArray) {
      state.product = emptyArray;
    },
  },
  actions: {
    async getProducts({ commit }, { page, limit }) {
      // page -> items
      // 1 -> 1-9 -> 0
      // 2 -> 10-18 -> 9
      // 3 -> 19-27 -> 18
      // ...
      if (!page) page = 1;
      if (!limit) limit = 9;
      //to number
      page = Number(page);
      limit = Number(limit);
      //minimum acceptable page is 3
      page = page < 1 ? 1 : page;
      //minimum acceptable limit is 3
      limit = limit < 3 ? 3 : limit;
      //minimum acceptable page is page * limit
      page = page * limit < 20 ? page : Math.ceil(20 / limit);
      //skipper
      const skip = (page - 1) * limit;
      // console.log({ page, limit, skip });
      //since we dont have skip api, i did what i can for pagination
      const api_endpoint = `https://fakestoreapi.com/products?limit=${
        limit + skip
      }`;
      // console.log(api_endpoint);
      let res = await axios.get(api_endpoint);
      res = res.data.slice(skip, skip + limit);

      commit("setProducts", res);
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
    async getEmptyProducts({ commit }) {
      commit("emptyProducts", []);
    },
  },
};
