<template>
  <!-- PRODUCT-->
  <div class="product text-center">
    <b-modal
      hide-backdrop
      ref="my-modal"
      hide-footer
      hide-header
      tabindex="-1"
      centered
      size="lg"
    >
      <product-modal @closeModal="hideModal"></product-modal>
    </b-modal>
    <div class="position-relative mb-3">
      <div class="badge text-white bg-dark"></div>
      <router-link
        class="d-block"
        :to="{ name: 'product-detail', params: { id: product.id } }"
        ><img class="img-fluid" :src="product.image" alt="..."
      /></router-link>
      <div class="product-overlay">
        <ul class="mb-0 list-inline">
          <li class="list-inline-item m-0 p-0">
            <a class="btn btn-sm btn-outline-dark" href="#!"
              ><i class="far fa-heart"></i
            ></a>
          </li>
          <li class="list-inline-item m-0 p-0">
            <router-link class="btn btn-sm btn-dark" :to="{ name: 'cart' }"
              >Add to cart</router-link
            >
          </li>
          <li class="list-inline-item me-0">
            <a class="btn btn-sm btn-outline-dark" @click="showModal">
              <i class="fas fa-expand"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <h6>
      <router-link
        class="reset-anchor"
        :to="{ name: 'product-detail', params: { id: product.id } }"
        >{{ product.title }}</router-link
      >
    </h6>
    <p class="small text-muted">${{ product.price }}</p>
  </div>
</template>

<script>
import ProductModal from "./ProductModal.vue";
export default {
  name: "Product",
  components: {
    ProductModal,
  },
  props: {
    product: Object,
  },
  methods: {
    hideModal: function () {
      // console.log(this.$refs["my-modal"]);
      // console.log("hide");
      this.$refs["my-modal"].hide();
    },
    showModal() {
      // console.log("show");
      this.$refs["my-modal"].show();
      // this.$refs["my-product"].style.opacity = 0.5;
    },
  },
};
</script>

<style scoped>
img {
  /* width: auto; */
  height: 250px;
  object-fit: contain;
  /* border: 1px solid red; */
}
</style>
