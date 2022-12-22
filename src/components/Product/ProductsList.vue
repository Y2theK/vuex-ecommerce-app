<template>
  <div class="row">
    <div :class="columnXlLayout" v-for="product in Products" :key="product.id">
      <Product :product="product" />
    </div>
  </div>
</template>
       
<script>
// import { mapActions, mapGetters } from "vuex";
import { createNamespacedHelpers } from "vuex";

const { mapGetters, mapActions } = createNamespacedHelpers("Product");
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
    if (this.$route.name === "shop") {
      this.getProducts({
        page: this.$route.query.page,
        limit: this.$route.query.limit,
      });
    } else {
      this.getProducts({ limit: 20 });
    }
  },
  watch: {
    $route() {
      this.getProducts({
        page: this.$route.query.page,
        limit: this.$route.query.limit,
      });
    },
  },
};
</script>

<style>
/* <!-- gLightbox gallery--> */
@import url("@a/template/vendor/glightbox/css/glightbox.min.css");
/* <!-- Range slider--> */
@import url("@a/template/vendor/nouislider/nouislider.min.css");
/* <!-- Choices CSS--> */
@import url("@a/template/vendor/choices.js/public/assets/styles/choices.min.css");
/* <!-- Swiper slider--> */
@import url("@a/template/vendor/swiper/swiper-bundle.min.css");
/* <!-- Google fonts--> */
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;700&amp;display=swap");
@import url("https://fonts.googleapis.com/css2?family=Martel+Sans:wght@300;400;800&amp;display=swap");
/* <!-- Custom stylesheet - for your changes--> */
@import url("@a/template/css/custom.css");
@import url("@a/template/css/style.default.css");
</style>