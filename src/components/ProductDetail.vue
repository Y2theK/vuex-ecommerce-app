<template>
  <section class="py-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-6">
          <!-- PRODUCT SLIDER-->
          <div class="row m-sm-0">
            <div class="col-sm-2 p-sm-0 mt-2 mt-sm-0 px-2 me-4"></div>
            <div class="col-sm-10">
              <img class="img-fluid" :src="Product.image" alt="..." />
            </div>
          </div>
        </div>
        <!-- PRODUCT DETAILS-->
        <div class="col-lg-6">
          <ul class="list-inline mb-2 text-sm">
            <li class="list-inline-item m-0">
              <i class="fas fa-star small text-warning"></i>
            </li>
            <li class="list-inline-item m-0 1">
              <i class="fas fa-star small text-warning"></i>
            </li>
            <li class="list-inline-item m-0 2">
              <i class="fas fa-star small text-warning"></i>
            </li>
            <li class="list-inline-item m-0 3">
              <i class="fas fa-star small text-warning"></i>
            </li>
            <li class="list-inline-item m-0 4">
              <i class="fas fa-star small text-warning"></i>
            </li>
          </ul>
          <h1>{{ Product.title }}</h1>
          <p class="text-muted lead">${{ Product.price }}</p>
          <p class="text-sm mb-4">
            {{ Product.description }}
          </p>
          <div class="row align-items-stretch mb-4">
            <div class="col-sm-5 pr-sm-0">
              <div
                class="
                  border
                  d-flex
                  align-items-center
                  justify-content-between
                  py-1
                  px-3
                  bg-white
                  border-white
                "
              >
                <span
                  class="small text-uppercase text-gray mr-4 no-select"
                  v-if="Product"
                  >{{ Product.rating["count"] }}</span
                >
                <div class="quantity">
                  <button class="dec-btn p-0">
                    <i class="fas fa-caret-left"></i>
                  </button>
                  <input
                    class="form-control border-0 shadow-0 p-0"
                    type="text"
                    value="1"
                  />
                  <button class="inc-btn p-0">
                    <i class="fas fa-caret-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-3 pl-sm-0">
              <a
                class="
                  btn btn-dark btn-sm btn-block
                  h-100
                  d-flex
                  align-items-center
                  justify-content-center
                  px-0
                "
                href="cart.html"
                >Add to cart</a
              >
            </div>
          </div>
          <a class="text-dark p-0 mb-4 d-inline-block" href="#!"
            ><i class="far fa-heart me-2"></i>Add to wish list</a
          ><br />
          <ul class="list-unstyled small d-inline-block">
            <li class="px-3 py-2 mb-1 bg-white">
              <strong class="text-uppercase">In Stock:</strong
              ><span class="ms-2 text-muted" v-if="Product">{{
                Product.rating["count"]
              }}</span>
            </li>
            <li class="px-3 py-2 mb-1 bg-white text-muted">
              <strong class="text-uppercase text-dark">Category:</strong
              ><a class="reset-anchor ms-2" href="#!">{{ Product.category }}</a>
            </li>
            <li class="px-3 py-2 mb-1 bg-white text-muted">
              <strong class="text-uppercase text-dark">Ratings:</strong
              ><a class="reset-anchor ms-2" href="#!" v-if="Product">{{
                Product.rating["rate"]
              }}</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- DETAILS TABS-->
      <div>
        <b-tabs content-class="mt-3">
          <b-tab title="Description" active
            ><div class="p-4 p-lg-5 bg-white">
              <h6 class="text-uppercase">Product description</h6>
              <p class="text-muted text-sm mb-0">
                {{ Product.description }}
              </p>
            </div></b-tab
          >
          <b-tab title="Review">
            <div class="p-4 p-lg-5 bg-white">
              <div class="row">
                <div class="col-lg-8">
                  <div class="d-flex mb-3">
                    <div class="flex-shrink-0">
                      <img
                        class="rounded-circle"
                        src="../../template/img/customer-1.png"
                        alt=""
                        width="50px"
                        height="50px"
                      />
                    </div>
                    <div class="ms-3 flex-shrink-1">
                      <h6 class="mb-0 text-uppercase">Jason Doe</h6>
                      <p class="small text-muted mb-0 text-uppercase">
                        20 May 2020
                      </p>
                      <ul class="list-inline mb-1 text-xs">
                        <li class="list-inline-item m-0">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fas fa-star-half-alt text-warning"></i>
                        </li>
                      </ul>
                      <p class="text-sm mb-0 text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <img
                        class="rounded-circle"
                        src="../../template/img/customer-2.png"
                        alt=""
                        width="50px"
                        height="50px"
                      />
                    </div>
                    <div class="ms-3 flex-shrink-1">
                      <h6 class="mb-0 text-uppercase">Jane Doe</h6>
                      <p class="small text-muted mb-0 text-uppercase">
                        20 May 2020
                      </p>
                      <ul class="list-inline mb-1 text-xs">
                        <li class="list-inline-item m-0">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fas fa-star text-warning"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fas fa-star-half-alt text-warning"></i>
                        </li>
                      </ul>
                      <p class="text-sm mb-0 text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div></b-tab
          >
        </b-tabs>
      </div>
      <RelatedProducts :category="Product.category" />
    </div>
  </section>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import RelatedProducts from "./RelatedProducts.vue";
export default {
  name: "ProductDetail",
  components: {
    RelatedProducts,
  },
  methods: mapActions(["getProduct"]),
  computed: mapGetters(["Product"]),
  mounted() {
    this.getProduct(this.$route.params.id);
  },
  //watch the route change and fetch updated product
  watch: {
    //  update the data of products variable when you change the route
    // as vue optimises page reloads and does not reload in your case if you are on same route.
    $route() {
      this.getProduct(this.$route.params.id);
    },
  },
};
</script>

<style scoped>
img {
  width: auto;
}
</style>
