<template>
  <div>
    <div class="row">
      <div
        :class="columnXlLayout"
        v-for="product in Products"
        :key="product.id"
      >
        <Product :product="product" />
      </div>
    </div>
  </div>
</template>
       
<script>
import { mapActions, mapGetters } from "vuex";
import Product from "./Product.vue";
export default {
  name: "ProductsList",
  props: {
    columnXlLayout: {
      type: String,
      default: "col-xl-3 col-lg-4 col-sm-6",
    },
  },
  components: {
    Product,
  },
  methods: mapActions(["getProducts"]),
  computed: mapGetters(["Products"]),
  mounted() {
    // if route is shop we will limit the product to 9 and show with pagination
    if (this.$route.name === "shop") {
      const LIMIT = 9;
      this.getProducts(LIMIT);
    } else {
      this.getProducts();
    }
  },
  watch: {
    $route() {},
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