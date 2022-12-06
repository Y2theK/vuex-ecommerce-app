<template>
  <div class="container">
    <!-- HERO SECTION-->
    <HeroSection />

    <!-- CATEGORIES SECTION-->
    <CategoriesList />

    <!-- TRENDING PRODUCTS-->
    <ProductsList />

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
