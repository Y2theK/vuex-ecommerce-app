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
      <!-- BILLING ADDRESS-->
      <h2 class="h5 text-uppercase mb-4">Billing details</h2>
      <div class="row">
        <div class="col-lg-8">
          <form action="#">
            <div class="row gy-3">
              <div class="col-lg-6">
                <label class="form-label text-sm text-uppercase" for="firstName"
                  >First name
                </label>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                />
              </div>
              <div class="col-lg-6">
                <label class="form-label text-sm text-uppercase" for="lastName"
                  >Last name
                </label>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                />
              </div>
              <div class="col-lg-6">
                <label class="form-label text-sm text-uppercase" for="email"
                  >Email address
                </label>
                <input
                  class="form-control form-control-lg"
                  type="email"
                  id="email"
                  placeholder="e.g. Jason@example.com"
                />
              </div>
              <div class="col-lg-6">
                <label class="form-label text-sm text-uppercase" for="phone"
                  >Phone number
                </label>
                <input
                  class="form-control form-control-lg"
                  type="tel"
                  id="phone"
                  placeholder="e.g. +02 245354745"
                />
              </div>
              <div class="col-lg-6">
                <label class="form-label text-sm text-uppercase" for="company"
                  >Company name (optional)
                </label>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  id="company"
                  placeholder="Your company name"
                />
              </div>
              <div class="col-lg-6 form-group">
                <label class="form-label text-sm text-uppercase" for="country"
                  >Country</label
                >
                <select
                  class="country"
                  id="country"
                  data-customclass="form-control form-control-lg rounded-0"
                >
                  <option value>Choose your country</option>
                </select>
              </div>
              <div class="col-lg-12">
                <label class="form-label text-sm text-uppercase" for="address"
                  >Address line 1
                </label>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  id="address"
                  placeholder="House number and street name"
                />
              </div>
              <div class="col-lg-12">
                <label
                  class="form-label text-sm text-uppercase"
                  for="addressalt"
                  >Address line 2
                </label>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  id="addressalt"
                  placeholder="Apartment, Suite, Unit, etc (optional)"
                />
              </div>
              <div class="col-lg-6">
                <label class="form-label text-sm text-uppercase" for="city"
                  >Town/City
                </label>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  id="city"
                />
              </div>
              <div class="col-lg-6">
                <label class="form-label text-sm text-uppercase" for="state"
                  >State/County
                </label>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  id="state"
                />
              </div>

              <div class="col-lg-12 form-group">
                <button class="btn btn-dark" type="submit">Place order</button>
              </div>
            </div>
          </form>
        </div>
        <!-- ORDER SUMMARY-->
        <div class="col-lg-4">
          <div class="card border-0 rounded-0 p-lg-4 bg-light">
            <div class="card-body">
              <h5 class="text-uppercase mb-4">Your order</h5>
              <ul class="list-unstyled mb-0">
                <li class="d-flex align-items-center justify-content-between">
                  <strong class="small fw-bold">Red digital smartwatch</strong
                  ><span class="text-muted small">$250</span>
                </li>
                <li class="border-bottom my-2"></li>
                <li class="d-flex align-items-center justify-content-between">
                  <strong class="small fw-bold">Gray Nike running shoes</strong
                  ><span class="text-muted small">$351</span>
                </li>
                <li class="border-bottom my-2"></li>
                <li class="d-flex align-items-center justify-content-between">
                  <strong class="text-uppercase small fw-bold">Total</strong
                  ><span>$601</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BreadcrumbSection from "./BreadcrumbSection.vue";
export default {
  name: "Checkout",
  components: {
    BreadcrumbSection,
  },
};
</script>

<style>
</style>