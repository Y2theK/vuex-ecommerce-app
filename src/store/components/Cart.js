import axios from "axios";
export default {
  state: {
    carts: [],
    cart: {},
    cartTotalPrice: null,
  },
  getters: {
    carts(state) {
      return state.carts;
    },
    cart(state) {
      return state.cart;
    },
    cartTotalPrice(state) {
      return state.cartTotalPrice;
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
    updateCart(state, { product, quantityUpd }) {
      state.cart.products.forEach((item) => {
        if (item.product.id === product.id) {
          quantityUpd === "inc" ? item.quantity++ : item.quantity--;
          if (item.quantity <= 0) {
            item.quantity = 0;
          }
        }
      });
    },
    removeFromCart(state, productId) {
      state.cart.products = state.cart.products.filter((item) => {
        return item.product.id !== productId;
      });
    },
    applyDiscountCoupon(state, price) {
      state.cartTotalPrice = price;
    },
    setTotalPrice(state) {
      let total = 0;
      state.cart.products.forEach((item) => {
        total += item.product.price * item.quantity;
      });
      total = total.toFixed(2);
      state.cartTotalPrice = total;
    },
  },

  actions: {
    async getCart({ commit, dispatch, rootGetters }) {
      //get user latest cart
      let res = await axios.get("https://fakestoreapi.com/carts/user/2");
      let cart = res.data[0]; //take the first item from array
      let product;
      cart.products.forEach(async (prod) => {
        await dispatch("Product/getProduct", prod.productId, { root: true });
        product = rootGetters["Product/Product"];
        // product = await axios.get(
        //   `https://fakestoreapi.com/products/${prod.productId}`
        // );
        delete prod.productId;
        prod.product = product;
      });
      console.log(cart.products);
      commit("setCart", cart);
    },
    async addToCart({ commit }, { product, quantity }) {
      commit("addToCart", { product, quantity });
    },
    async updateCart({ commit }, { product, quantityUpd }) {
      commit("updateCart", { product, quantityUpd });
    },
    async removeFromCart({ commit }, productId) {
      commit("removeFromCart", productId);
    },
    async applyDiscountCoupon({ commit }, price) {
      commit("applyDiscountCoupon", price);
    },
    async getTotalPrice({ commit }) {
      commit("setTotalPrice");
    },
  },
};
