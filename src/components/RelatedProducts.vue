<template>
  <div>
    <!-- RELATED PRODUCTS-->
    <h2 class="h5 text-uppercase mb-4">Related products</h2>
    <div class="row">
      <!-- PRODUCT-->
      <div
        class="col-lg-3 col-sm-6"
        v-for="product in Products"
        :key="product.id"
      >
        <div class="product text-center skel-loader">
          <div class="d-block mb-3 position-relative">
            <router-link
              class="d-block"
              :to="{ name: 'product-detail', params: { id: product.id } }"
              ><img class="img-fluid w-100" :src="product.image" alt="..."
            /></router-link>
            <div class="product-overlay">
              <ul class="mb-0 list-inline">
                <li class="list-inline-item m-0 p-0">
                  <a class="btn btn-sm btn-outline-dark" href="#!"
                    ><i class="far fa-heart"></i
                  ></a>
                </li>
                <li class="list-inline-item m-0 p-0">
                  <a class="btn btn-sm btn-dark" href="#!">Add to cart</a>
                </li>
                <li class="list-inline-item mr-0">
                  <a
                    class="btn btn-sm btn-outline-dark"
                    href="#productView"
                    data-bs-toggle="modal"
                    ><i class="fas fa-expand"></i
                  ></a>
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    category: String,
  },
  computed: mapGetters(["Products"]),
  methods: mapActions(["getRelatedProducts"]),
  mounted() {
    console.log(this.category);
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