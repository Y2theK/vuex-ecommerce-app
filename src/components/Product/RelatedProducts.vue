<template>
  <div>
    <!-- RELATED PRODUCTS-->
    <h2 class="h5 text-uppercase mb-4">Related products</h2>
    <div class="row">
      <div
        class="col-lg-3 col-sm-6"
        v-for="product in Products"
        :key="product.id"
      >
        <Product :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters, mapActions } = createNamespacedHelpers("Product");
import Product from "./Product.vue";
export default {
  name: "RelatedProducts",
  props: {
    category: String,
  },
  components: {
    Product,
  },
  computed: mapGetters(["Products"]),

  methods: {
    ...mapActions(["getRelatedProducts"]),
    hideModal: function () {
      this.$refs["product-modal"].hide();
    },
    showModal() {
      this.$refs["product-modal"].show();
    },
  },
  mounted() {
    // console.log(this.category);
    this.getRelatedProducts(this.category);
  },
};
</script>
<style scoped>
img {
  height: 200px;
  object-fit: contain;
}
</style>