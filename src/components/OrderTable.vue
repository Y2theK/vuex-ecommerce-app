<template>
  <div class="col-lg-4">
    <div class="card border-0 rounded-0 p-lg-4 bg-light">
      <div class="card-body">
        <h5 class="text-uppercase mb-4">Cart total</h5>
        <ul class="list-unstyled mb-0">
          <li class="d-flex align-items-center justify-content-between">
            <strong class="text-uppercase small font-weight-bold"
              >Subtotal </strong
            ><span class="text-muted small">${{ cartTotalPrice }}</span>
          </li>
          <li class="border-bottom my-2"></li>
          <li class="d-flex align-items-center justify-content-between mb-4">
            <strong class="text-uppercase small font-weight-bold">Total</strong
            ><span>${{ couponPrice }}</span>
          </li>
          <li>
            <form action="#">
              <div class="input-group mb-0">
                <input
                  class="form-control"
                  type="text"
                  @change="coupon.couponText = null"
                  v-model="couponCode"
                  placeholder="Enter your coupon"
                />
                <p
                  class="w-100"
                  :class="[coupon.status ? 'text-success' : 'text-danger']"
                  v-if="coupon.couponText"
                >
                  <small class="">{{ coupon.couponText }}</small>
                </p>
                <button
                  class="btn btn-dark btn-sm w-100"
                  @click.prevent="applyCouponCode(100)"
                >
                  <i class="fas fa-gift me-2"></i>Apply coupon
                </button>
              </div>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      couponCode: "",
      couponPrice: "",
      isApplyCoupon: false,
      coupon: {
        status: false,
        couponText: null,
      },
    };
  },
  watch: {
    cartTotalPrice() {
      this.couponPrice = this.cartTotalPrice;
    },
  },
  computed: {
    ...mapGetters(["cartTotalPrice"]),
  },
  mounted() {
    this.couponPrice = this.cartTotalPrice;
    this.getTotalPrice();
  },
  methods: {
    ...mapActions(["applyDiscountCoupon", "getTotalPrice"]),
    async applyCouponCode(discount) {
      //coupon code must be godyk
      //cartTotalPrice must be 5 times than discount
      //only when isApplyCoupon is false
      if (this.couponCode !== "godyk") {
        this.coupon.couponText = "This Coupon is not valid...";
        return;
      }
      if (this.cartTotalPrice < discount * 5) {
        this.coupon.couponText = "Buy more to activate coupon...";
        return;
      }
      if (this.isApplyCoupon) {
        this.coupon.couponText = "Coupon is already activated...";
        return;
      }

      this.couponPrice -= discount;
      this.couponPrice = this.couponPrice.toFixed(2);
      this.coupon.couponText = "Coupon is successfully activated...";
      this.coupon.status = true;
      this.isApplyCoupon = true;
      this.applyDiscountCoupon(this.couponPrice);
    },
  },
};
</script>