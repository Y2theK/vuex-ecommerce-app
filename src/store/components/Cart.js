import axios from "axios";
export default {
  state: {
    carts: [],
    cart: {},
    cartTotalPrice: null,
    discount: {
      isApplyDiscount: false,
      discountRate: 100,
      discountCouponCode: "godyk",
      discountStatusText: "",
      discountError: false,
    },
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
    discount(state) {
      return state.discount;
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
    applyDiscountCoupon(state, discountCouponCode) {
      if (state.discount.isApplyDiscount) {
        state.discount.discountStatusText = "Coupon is already activated...";
        // state.discount.discountError = true;
        return;
      }
      if (state.cartTotalPrice < state.discount.discountRate * 5) {
        state.discount.discountStatusText = "Buy more to activate coupon...";
        state.discount.discountError = true;
        return;
      }
      if (discountCouponCode !== "godyk") {
        state.discount.discountStatusText = "This Coupon is not valid...";
        state.discount.discountError = true;
        return;
      }

      state.discount.discountStatusText = "Coupon is successfully activated...";
      state.discount.isApplyDiscount = true;
      state.discount.discountError = false;
      state.cartTotalPrice -= state.discount.discountRate;
    },
    setTotalPrice(state, total) {
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
    async applyDiscountCoupon({ commit }, discountCouponCode) {
      commit("applyDiscountCoupon", discountCouponCode);
    },
    async getTotalPrice({ commit, state }) {
      let total = 0;
      state.cart.products.forEach((item) => {
        total += item.product.price * item.quantity;
      });

      if (
        state.discount.isApplyDiscount &&
        total > state.discount.discountRate * 5
      ) {
        total = total - state.discount.discountRate;
      }
      total = total.toFixed(2);
      console.log(total);
      commit("setTotalPrice", total);
    },
  },
};
