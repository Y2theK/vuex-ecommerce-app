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
    addToCart(state, { product, quantity }) {
      let productIsInCart = state.cart.products.find((item) => {
        return item.product.id === product.id;
      });

      if (productIsInCart) {
        productIsInCart.quantity += quantity;
        return;
      } else {
        state.cart.products.push({ product, quantity });
      }
    },
  },

  actions: {
    async getCart({ commit, dispatch, rootGetters }) {
      //get user latest cart
      let res = await axios.get("https://fakestoreapi.com/carts/user/2");
      let cart = res.data[0]; //take the first item from array
      cart.products.forEach(async (prod) => {
        await dispatch("Product/getProduct", prod.productId, { root: true });
        let product = rootGetters["Product/Product"];
        delete prod.productId;
        prod.product = product;
      });
      // console.log(cart);
      commit("setCart", cart);
    },
    async addToCart({ commit }, { product, quantity }) {
      commit("addToCart", { product, quantity });
    },
  },
};
