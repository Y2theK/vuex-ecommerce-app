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
          <div class="row mb-4">
            <div class="col-sm-3 pl-sm-0">
              <a
                class="
                  btn btn-dark btn-sm btn-block
                  d-flex
                  align-items-center
                  justify-content-center
                  px-0
                  mb-4
                "
                @click.prevent="addNewProductToCart(Product)"
                >Add to cart</a
              >
            </div>
            <div class="col-sm-5 pr-sm-0">
              <a
                class="btn btn-sm text-dark p-2 mb-4"
                @click="$toaster.info('This feature is under development :)')"
                ><i class="far fa-heart me-2"></i>Add to wish list</a
              >
            </div>
          </div>

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
                        src="@a/src/assets/img/customer-1.png"
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
                        src="@a/src/assets/img/customer-2.png"
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
import RelatedProducts from "../Product/RelatedProducts.vue";
export default {
  name: "ProductDetail",
  components: {
    RelatedProducts,
  },
  data() {
    return {
      quantity: 1,
    };
  },

  methods: {
    ...mapActions({
      getProduct: "Product/getProduct",
      addToCart: "addToCart",
    }),
    // ...mapActions(["addToCart"]),
    addNewProductToCart(product) {
      if (!localStorage.getItem("auth")) {
        this.$toaster.warning("Plase login to checkout products :)");
        return this.$router.push({ name: "login" });
      }
      this.addToCart({
        product,
        quantity: 1,
      });
      this.$toaster.success("This item has been added to your cart");
    },
  },
  computed: mapGetters({
    Product: "Product/Product",
  }),

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
