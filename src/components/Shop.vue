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
            <div class="py-2 px-4 bg-dark text-white mb-3">
              <strong class="small text-uppercase fw-bold"
                >Fashion &amp; Acc</strong
              >
            </div>
            <ul
              class="list-unstyled small text-muted ps-lg-4 font-weight-normal"
            >
              <li class="mb-2">
                <a class="reset-anchor" href="#!">Women's T-Shirts</a>
              </li>
              <li class="mb-2">
                <a class="reset-anchor" href="#!">Men's T-Shirts</a>
              </li>
              <li class="mb-2">
                <a class="reset-anchor" href="#!">Dresses</a>
              </li>
              <li class="mb-2">
                <a class="reset-anchor" href="#!">Novelty socks</a>
              </li>
              <li class="mb-2">
                <a class="reset-anchor" href="#!">Women's sunglasses</a>
              </li>
              <li class="mb-2">
                <a class="reset-anchor" href="#!">Men's sunglasses</a>
              </li>
            </ul>
            <div class="py-2 px-4 bg-light mb-3">
              <strong class="small text-uppercase fw-bold"
                >Health &amp; Beauty</strong
              >
            </div>
            <ul
              class="list-unstyled small text-muted ps-lg-4 font-weight-normal"
            >
              <li class="mb-2">
                <a class="reset-anchor" href="#!">Shavers</a>
              </li>
              <li class="mb-2"><a class="reset-anchor" href="#!">bags</a></li>
              <li class="mb-2">
                <a class="reset-anchor" href="#!">Cosmetic</a>
              </li>
              <li class="mb-2">
                <a class="reset-anchor" href="#!">Nail Art</a>
              </li>
              <li class="mb-2">
                <a class="reset-anchor" href="#!">Skin Masks &amp; Peels</a>
              </li>
              <li class="mb-2">
                <a class="reset-anchor" href="#!">Korean cosmetics</a>
              </li>
            </ul>
            <div class="py-2 px-4 bg-light mb-3">
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
                <a class="reset-anchor" href="#!">Electronics</a>
              </li>
              <li class="mb-2">
                <a class="reset-anchor" href="#!">USB Flash drives</a>
              </li>
              <li class="mb-2">
                <a class="reset-anchor" href="#!">Headphones</a>
              </li>
              <li class="mb-2">
                <a class="reset-anchor" href="#!">Portable speakers</a>
              </li>
              <li class="mb-2">
                <a class="reset-anchor" href="#!"
                  >Cell Phone bluetooth headsets</a
                >
              </li>
              <li class="mb-2">
                <a class="reset-anchor" href="#!">Keyboards</a>
              </li>
            </ul>
            <h6 class="text-uppercase mb-4">Price range</h6>
            <div class="price-range pt-4 mb-5">
              <div id="range"></div>
              <div class="row pt-2">
                <div class="col-6">
                  <strong class="small fw-bold text-uppercase">From</strong>
                </div>
                <div class="col-6 text-end">
                  <strong class="small fw-bold text-uppercase">To</strong>
                </div>
              </div>
            </div>
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
                    <a class="reset-anchor p-0" href="#!"
                      ><i class="fas fa-th-large"></i
                    ></a>
                  </li>
                  <li class="list-inline-item text-muted me-3">
                    <a class="reset-anchor p-0" href="#!"
                      ><i class="fas fa-th"></i
                    ></a>
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
                        page: Number($route.query.page) - 1,
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
                        page: Number($route.query.page) + 1,
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