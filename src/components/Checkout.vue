<template>
  <div class="container">
    <!-- HERO SECTION-->
    <breadcrumb-section BreadcrumbTitle="Checkout">
      <template #BreadcrumbLists>
        <li class="breadcrumb-item">
          <router-link class="text-dark" :to="{ name: 'home' }"
            >Home</router-link
          >
        </li>
        <li class="breadcrumb-item">
          <router-link class="text-dark" :to="{ name: 'cart' }"
            >Cart</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">Checkout</li>
      </template>
    </breadcrumb-section>

    <section class="py-5">
      <h2 class="h5 text-uppercase mb-4">Billing details</h2>
      <div class="row">
        <!-- BILLING ADDRESS-->
        <BillingAddress />

        <!-- ORDER SUMMARY-->
        <OrderSummary />
      </div>
    </section>
  </div>
</template>

<script>
import BreadcrumbSection from "./BreadcrumbSection.vue";
import BillingAddress from "./BillingAddress.vue";
import OrderSummary from "./OrderSummary.vue";
export default {
  name: "Checkout",
  components: {
    BreadcrumbSection,
    BillingAddress,
    OrderSummary,
  },
};
</script>

<style>
</style>