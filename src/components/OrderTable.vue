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
                  v-model="couponCode"
                  placeholder="Enter your coupon"
                />
                <p
                  class="w-100"
                  :class="[coupon.status ? 'text-danger' : 'text-success']"
                  v-if="coupon.couponText"
                >
                  <small class="">{{ coupon.couponText }}</small>
                </p>
                <button
                  class="btn btn-dark btn-sm w-100"
                  @click.prevent="applyCouponCode()"
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
    // discount() {
    //   this.coupon.status = this.discount.discountError;
    //   this.coupon.couponText = this.discount.discountStatusText;
    // },
    cartTotalPrice() {
      this.couponPrice = this.cartTotalPrice;
    },
  },
  computed: {
    ...mapGetters(["cartTotalPrice", "discount"]),
  },
  mounted() {
    this.couponPrice = this.cartTotalPrice;
    this.coupon.status = this.discount.discountError;
    this.coupon.couponText = this.discount.discountStatusText;
    this.getTotalPrice();
  },
  methods: {
    ...mapActions(["applyDiscountCoupon", "getTotalPrice"]),
    async applyCouponCode() {
      await this.applyDiscountCoupon(this.couponCode);
      this.coupon.status = this.discount.discountError;
      this.coupon.couponText = this.discount.discountStatusText;
    },
  },
};
</script>