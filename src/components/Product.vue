<template>
  <!-- PRODUCT-->
  <div class="product text-center">
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
            <a class="btn btn-sm btn-dark" href="cart.html">Add to cart</a>
          </li>
          <li class="list-inline-item me-0">
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
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object,
  },
};
</script>

<style scoped>
img {
  /* width: auto; */
  height: 200px;
  object-fit: contain;
  /* border: 1px solid red; */
}
</style>
