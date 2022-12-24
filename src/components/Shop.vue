<template>
  <div class="container">
    <!-- HERO SECTION-->
    <breadcrumb-section BreadcrumbTitle="Shop">
      <template #BreadcrumbLists>
        <li class="breadcrumb-item">
          <router-link class="text-dark" :to="{ name: 'home' }"
            >Home</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">Shop</li>
      </template>
    </breadcrumb-section>

    <section class="py-5">
      <div class="container p-0">
        <div class="row">
          <!-- SHOP SIDEBAR-->
          <div class="col-lg-3 order-2 order-lg-1">
            <h5 class="text-uppercase mb-4">Categories</h5>
            <div
              class="py-2 px-4 mb-3"
              :class="[
                $route.query.category === 'women%27s%20clothing' ||
                $route.query.category === 'men%27s%20clothing'
                  ? 'bg-dark text-white'
                  : 'bg-light text-dark',
              ]"
            >
              <strong class="small text-uppercase fw-bold"
                >Fashion &amp; Acc</strong
              >
            </div>
            <ul
              class="list-unstyled small text-muted ps-lg-4 font-weight-normal"
            >
              <li class="mb-2">
                <router-link
                  :to="{
                    name: 'shop',
                    query: { category: 'women%27s%20clothing' },
                  }"
                  class="reset-anchor"
                  >Women's T-Shirts</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  class="reset-anchor"
                  :to="{
                    name: 'shop',
                    query: { category: 'men%27s%20clothing' },
                  }"
                  >Men's T-Shirts</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  class="reset-anchor"
                  :to="{
                    name: 'shop',
                    query: { category: 'women%27s%20clothing' },
                  }"
                  >Dresses</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  class="reset-anchor"
                  :to="{
                    name: 'shop',
                    query: { category: 'men%27s%20clothing' },
                  }"
                  >Men's Jacket</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  class="reset-anchor"
                  :to="{
                    name: 'shop',
                    query: { category: 'women%27s%20clothing' },
                  }"
                  >Women's Winter Coat</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  class="reset-anchor"
                  :to="{
                    name: 'shop',
                    query: { category: 'men%27s%20clothing' },
                  }"
                  >Bags</router-link
                >
              </li>
            </ul>
            <div
              class="py-2 px-4 mb-3"
              :class="[
                $route.query.category === 'jewelery'
                  ? 'bg-dark text-white'
                  : 'bg-light text-dark',
              ]"
            >
              <strong class="small text-uppercase fw-bold">Jewelery </strong>
            </div>
            <ul
              class="list-unstyled small text-muted ps-lg-4 font-weight-normal"
            >
              <li class="mb-2">
                <router-link
                  :to="{ name: 'shop', query: { category: 'jewelery' } }"
                  class="reset-anchor"
                  >Brooches</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  class="reset-anchor"
                  :to="{ name: 'shop', query: { category: 'jewelery' } }"
                  >Pendants</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  class="reset-anchor"
                  :to="{ name: 'shop', query: { category: 'jewelery' } }"
                  >Bracelets</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  class="reset-anchor"
                  :to="{ name: 'shop', query: { category: 'jewelery' } }"
                  >Cufflinks</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  class="reset-anchor"
                  :to="{ name: 'shop', query: { category: 'jewelery' } }"
                  >Earrings</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  class="reset-anchor"
                  :to="{ name: 'shop', query: { category: 'jewelery' } }"
                  >Rings</router-link
                >
              </li>
            </ul>
            <div
              class="py-2 px-4 mb-3"
              :class="[
                $route.query.category === 'electronics'
                  ? 'bg-dark text-white'
                  : 'bg-light text-dark',
              ]"
            >
              <strong class="small text-uppercase fw-bold">Electronics</strong>
            </div>
            <ul
              class="
                list-unstyled
                small
                text-muted
                ps-lg-4
                font-weight-normal
                mb-5
              "
            >
              <li class="mb-2">
                <router-link
                  class="reset-anchor"
                  :to="{ name: 'shop', query: { category: 'electronics' } }"
                  >Electronics</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  class="reset-anchor"
                  :to="{ name: 'shop', query: { category: 'electronics' } }"
                  >USB Flash drives</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  class="reset-anchor"
                  :to="{ name: 'shop', query: { category: 'electronics' } }"
                  >Monitors</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  class="reset-anchor"
                  :to="{ name: 'shop', query: { category: 'electronics' } }"
                  >Hard Drives</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  class="reset-anchor"
                  :to="{ name: 'shop', query: { category: 'electronics' } }"
                  >Cell Phone bluetooth headsets</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  class="reset-anchor"
                  :to="{ name: 'shop', query: { category: 'electronics' } }"
                  >SSD / RAM</router-link
                >
              </li>
            </ul>
          </div>
          <!-- SHOP LISTING-->
          <div class="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
            <div class="row mb-3 align-items-center">
              <div class="col-lg-6 mb-2 mb-lg-0">
                <p class="text-sm text-muted mb-0">Showing 1–9 of 20 results</p>
              </div>
              <div class="col-lg-6">
                <ul
                  class="
                    list-inline
                    d-flex
                    align-items-center
                    justify-content-lg-end
                    mb-0
                  "
                >
                  <li class="list-inline-item text-muted me-3">
                    <router-link :to="{ name: 'shop' }" class="reset-anchor p-0"
                      ><i class="fas fa-th-large"></i
                    ></router-link>
                  </li>
                  <li class="list-inline-item text-muted me-3">
                    <router-link :to="{ name: 'shop' }" class="reset-anchor p-0"
                      ><i class="fas fa-th"></i
                    ></router-link>
                  </li>
                  <li class="list-inline-item">
                    <select
                      class="selectpicker"
                      data-customclass="form-control form-control-sm"
                    >
                      <option value>Sort By</option>
                      <option value="default">Default sorting</option>
                      <option value="popularity">Popularity</option>
                      <option value="low-high">Price: Low to High</option>
                      <option value="high-low">Price: High to Low</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>

            <!-- PRODUCT-->
            <section>
              <ProductsList column-xl-layout="col-xl-4 col-lg-4 col-sm-6" />
            </section>

            <!-- PAGINATION-->
            <nav aria-label="Page navigation example">
              <ul
                class="
                  pagination
                  d-flex
                  justify-content-center justify-content-lg-end
                "
              >
                <li class="page-item mx-1">
                  <router-link
                    class="page-link"
                    :to="{
                      name: 'shop',
                      query: {
                        ...$route.query,
                        page: $route.query.page
                          ? Number($route.query.page) - 1
                          : 1,
                      },
                    }"
                    aria-label="Previous"
                    ><span aria-hidden="true">«</span></router-link
                  >
                </li>
                <div v-for="count in pageCount" :key="count">
                  <li
                    class="page-item mx-1"
                    :class="{ active: Number($route.query.page) === count }"
                  >
                    <router-link
                      class="page-link"
                      :to="{
                        name: 'shop',
                        query: { ...$route.query, page: count },
                      }"
                      >{{ count }}</router-link
                    >
                  </li>
                </div>
                <li class="page-item ms-1" disabled>
                  <router-link
                    :disabled="pageCount * Number($route.query.limit) >= 20"
                    class="page-link"
                    :to="{
                      name: 'shop',
                      query: {
                        ...$route.query,
                        page: $route.query.page
                          ? Number($route.query.page) + 1
                          : 2,
                      },
                    }"
                    aria-label="Next"
                    ><span aria-hidden="true">»</span></router-link
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductsList from "./Product/ProductsList.vue";
import BreadcrumbSection from "./BreadcrumbSection.vue";
export default {
  name: "Shop",
  data() {
    return {
      pageCount: null,
    };
  },
  components: {
    ProductsList,
    BreadcrumbSection,
  },
  mounted() {
    const queryLimit = Number(this.$route.query.limit);
    const productsTotal = 20;
    //minimum acceptable limit is 3
    //default limit is 9
    let limit = queryLimit ? (queryLimit < 3 ? 3 : queryLimit) : 9;
    this.pageCount = Math.ceil(productsTotal / limit);
    // console.log(this.pageCount);
  },
};
</script>

<style>
</style>