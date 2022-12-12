<template>
  <div class="container">
    <!-- HERO SECTION-->
    <breadcrumb-section BreadcrumbTitle="Cart">
      <template #BreadcrumbLists>
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'home' }" class="text-dark"
            >Home</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">Cart</li>
      </template>
    </breadcrumb-section>

    <section class="py-5">
      <h2 class="h5 text-uppercase mb-4">Shopping cart</h2>
      <div class="row">
        <div class="col-lg-8 mb-4 mb-lg-0">
          <!-- CART TABLE-->
          <CartTable />

          <!-- CART NAV-->
          <CartNav />
        </div>
        <!-- ORDER TOTAL-->
        <OrderTable />
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BreadcrumbSection from "./BreadcrumbSection.vue";
import CartTable from "./CartTable.vue";
import OrderTable from "./OrderTable.vue";
import CartNav from "./CartNav.vue";
export default {
  name: "Cart",
  components: {
    BreadcrumbSection,
    CartTable,
    OrderTable,
    CartNav,
  },
  computed: mapGetters(["carts"]),
  methods: mapActions(["getUserCarts"]),
  mounted() {
    this.getUserCarts();
  },
};
</script>

<style>
</style>