<template>
  <div>
    <section class="py-5">
      <header>
        <p class="small text-muted small text-uppercase mb-1">
          Made the hard way
        </p>
        <h2 class="h5 text-uppercase mb-4">Top trending products</h2>
      </header>
      <div class="row">
        <div
          class="col-xl-3 col-lg-4 col-sm-6"
          v-for="product in Products"
          :key="product.id"
        >
          <Product :product="product" />
        </div>
      </div>
    </section>
  </div>
</template>
       
<script>
import { mapActions, mapGetters } from "vuex";
import Product from "./Product.vue";
export default {
  name: "ProductsList",
  components: {
    Product,
  },
  methods: mapActions(["getProducts"]),
  computed: mapGetters(["Products"]),
  mounted() {
    this.getProducts();
  },
};
</script>

<style>
/* <!-- gLightbox gallery--> */
@import url("../../template/vendor/glightbox/css/glightbox.min.css");
/* <!-- Range slider--> */
@import url("../../template/vendor/nouislider/nouislider.min.css");
/* <!-- Choices CSS--> */
@import url("../../template/vendor/choices.js/public/assets/styles/choices.min.css");
/* <!-- Swiper slider--> */
@import url("../../template/vendor/swiper/swiper-bundle.min.css");
/* <!-- Google fonts--> */
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;700&amp;display=swap");
@import url("https://fonts.googleapis.com/css2?family=Martel+Sans:wght@300;400;800&amp;display=swap");
/* <!-- Custom stylesheet - for your changes--> */
@import url("../../template/css/custom.css");
@import url("../../template/css/style.default.css");
</style>