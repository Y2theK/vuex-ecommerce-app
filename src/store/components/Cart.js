import axios from "axios";
export default {
  state: {
    carts: [],
  },
  getters: {
    carts(state) {
      return state.carts;
    },
  },
  mutations: {
    setCarts(state, carts) {
      state.carts = carts;
    },
  },
  actions: {
    async getUserCarts({ commit }) {
      let res = await axios.get("https://fakestoreapi.com/carts/user/2");
      commit("setCarts", res.data);
    },
  },
};
