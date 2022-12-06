import axios from "axios";
export default {
  state: {
    categories: [],
  },
  getters: {
    categories(state) {
      return state.categories;
    },
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    async getCategories({ commit }) {
      let res = await axios.get("https://fakestoreapi.com/products/categories");
      commit("setCategories", res.data);
    },
  },
};
