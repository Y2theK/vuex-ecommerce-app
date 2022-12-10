<template>
  <div class="container">
    <!-- HERO SECTION-->
    <HeroSection />

    <!-- CATEGORIES SECTION-->
    <CategoriesList />

    <!-- TRENDING PRODUCTS-->
    <section class="py-5">
      <header>
        <p class="small text-muted small text-uppercase mb-1">
          Made the hard way
        </p>
        <h2 class="h5 text-uppercase mb-4">Top trending products</h2>
      </header>
      <ProductsList />
    </section>

    <!-- SERVICES-->
    <Services />

    <!-- NEWSLETTER-->
    <NewsLetter />
  </div>
</template>

<script>
import ProductsList from "./ProductsList.vue";
import CategoriesList from "./CategoriesList.vue";
import Services from "./Services.vue";
import NewsLetter from "./NewsLetter.vue";
import HeroSection from "./HeroSection.vue";

export default {
  name: "Home",
  components: {
    ProductsList,
    CategoriesList,
    Services,
    NewsLetter,
    HeroSection,
  },
};
</script>
