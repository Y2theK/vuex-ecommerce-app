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
    addNewCart(state, cart) {
      state.carts.unshift(cart);
    },
    updateCart(state, cart) {
      state.carts.forEach((c) => {
        if (c.id === cart.id) {
          c = cart;
        }
      });
    },
    deleteCart(state, removeId) {
      state.carts = state.carts.filter((cart) => {
        return cart.id !== removeId;
      });
    },
  },
  actions: {
    async getUserCarts({ commit }) {
      let res = await axios.get("https://fakestoreapi.com/carts/user/2");
      commit("setCarts", res.data);
    },
    async addNewCart({ commit }, newCart) {
      let res = await axios.post("https://fakestoreapi.com/carts", newCart);
      console.log(res.data);
      commit("addNewCart", res.data);
    },
    async updateCart({ commit }, cart) {
      let res = await axios.put("https://fakestoreapi.com/carts/" + cart.id);
      console.log(res.data);
      commit("update", res.data);
    },
    async deleteCart({ commit }, removeId) {
      let res = await axios.delete(
        "https://fakestoreapi.com/carts/" + removeId
      );
      console.log(res.data);
      commit("deleteCart", removeId);
    },
  },
};
