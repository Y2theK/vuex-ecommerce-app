<template>
  <section class="pt-5">
    <header class="text-center">
      <p class="small text-muted small text-uppercase mb-1">
        Carefully created collections
      </p>
      <h2 class="h5 text-uppercase mb-4">Browse our categories</h2>
    </header>
    <div class="row">
      <div class="col-md-4">
        <a class="category-item" href="shop.html"
          ><img
            class="img-fluid"
            src="../../template/img/cat-img-1.jpg"
            alt=""
          /><strong class="category-item-title text-center">{{
            categories[3]
          }}</strong></a
        >
      </div>
      <div class="col-md-4">
        <a class="category-item mb-4" href="shop.html"
          ><img
            class="img-fluid"
            src="../../template/img/cat-img-2.jpg"
            alt=""
          /><strong class="category-item-title">{{ categories[2] }}</strong></a
        ><a class="category-item" href="shop.html"
          ><img
            class="img-fluid"
            src="../../template/img/cat-img-3.jpg"
            alt=""
          /><strong class="category-item-title">{{ categories[1] }}</strong></a
        >
      </div>
      <div class="col-md-4">
        <a class="category-item" href="shop.html"
          ><img
            class="img-fluid"
            src="../../template/img/cat-img-4.jpg"
            alt=""
          /><strong class="category-item-title">{{ categories[0] }}</strong></a
        >
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CategoriesList",
  computed: mapGetters(["categories"]),
  methods: mapActions(["getCategories"]),
  mounted() {
    this.getCategories();
  },
};
</script>

<style>
</style>