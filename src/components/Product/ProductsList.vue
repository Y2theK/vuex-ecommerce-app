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
        category: this.$route.query.category,
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
        category: this.$route.query.category,
      });
    },
  },
};
</script>

<style>
</style>