<template>
  <section class="hero pb-3 bg-cover bg-center d-flex align-items-center">
    <div class="container py-5">
      <div class="row px-4 px-lg-5">
        <div class="col-lg-6">
          <p class="text-muted small text-uppercase mb-2">
            New Inspiration 2020
          </p>
          <h1 class="h2 text-uppercase mb-3">20% off on new season</h1>
          <router-link class="btn btn-dark" :to="{ name: 'shop' }"
            >Browse collections</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
section {
  background-image: url("@a/src/assets/img/hero-banner-alt.jpg");
}
</style>