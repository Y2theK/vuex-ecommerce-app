import axios from "axios";
export default {
  state: {
    carts: [],
    cart: {},
  },
  getters: {
    carts(state) {
      return state.carts;
    },
    cart(state) {
      return state.cart;
    },
  },
  mutations: {
    setCarts(state, carts) {
      state.carts = carts;
    },
    setCart(state, cart) {
      state.cart = cart;
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
    async getUserCart({ commit, dispatch, rootGetters }) {
      //get user latest cart
      let res = await axios.get("https://fakestoreapi.com/carts/user/1");
      let cart = res.data[0]; //take the first item from array
      commit("setCart", cart);

      //gonna take product id from cart and set that products in store
      let products = [];
      cart.products.forEach(async (prod) => {
        //product get by id
        await dispatch("Product/getProduct", prod.productId, { root: true });
        //get the product and push
        let product = rootGetters["Product/Product"];
        products.push(product);
      });
      //commit to products
      commit("Product/setProducts", products, { root: true });
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
