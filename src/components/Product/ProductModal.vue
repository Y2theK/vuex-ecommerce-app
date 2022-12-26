<template>
  <!--  Modal -->

  <div v-if="Product" class="">
    <button
      class="btn-close p-4 position-absolute top-0 end-0 z-index-20 shadow-0"
      type="button"
      @click="modalClose"
    ></button>

    <div class="row align-items-stretch">
      <div
        class="
          col-lg-6
          p-lg-0
          product
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <img class="img-fluid" :src="Product.image" alt="..." />
      </div>
      <div class="col-lg-6">
        <div class="p-4 my-md-4">
          <ul class="list-inline mb-2">
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
          <h2 class="h4">{{ Product.title }}</h2>
          <p class="text-muted">${{ Product.price }}</p>
          <p class="text-sm mb-4">
            {{ Product.description }}
          </p>
          <div class="row align-items-stretch mb-4 gx-0">
            <div class="col-sm-5">
              <a
                class="
                  btn btn-dark btn-sm
                  w-100
                  h-100
                  d-flex
                  align-items-center
                  justify-content-center
                  px-0
                "
                @click.prevent="addNewProductToCart(Product)"
                >Add to cart</a
              >
            </div>
          </div>
          <a class="btn btn-link text-dark text-decoration-none p-2" href="#!"
            ><i class="far fa-heart me-2"></i>Add to wish list</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProductModal",
  props: {
    Product: Object,
  },

  methods: {
    ...mapActions({
      addToCart: "addToCart",
    }),
    addNewProductToCart(product) {
      if (!localStorage.getItem("auth")) {
        return this.$router.push({ name: "login" });
      }
      this.addToCart({
        product,
        quantity: 1,
      });
    },
    modalClose: function () {
      this.$emit("closeModal");
    },
  },
};
</script>

<style >
</style>