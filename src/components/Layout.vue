<template>
  <!DOCTYPE html>
  <html>
    <Header />
    <body>
      <div class="page-holder">
        <!-- navbar-->
        <Navbar />

        <div class="container">
          <router-view></router-view>
        </div>

        <Footer />

        <!-- FontAwesome CSS - loading as last, so it doesn't block rendering-->
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />
      </div>
    </body>
  </html>
</template>

<script src="../assets/myjs.js"></script>
<script>
import ProductsList from "./ProductsList.vue";
import CategoriesList from "./CategoriesList.vue";
import Navbar from "./Navbar.vue";
import Services from "./Services.vue";
import NewsLetter from "./NewsLetter.vue";
import Footer from "./Footer.vue";
import HeroSection from "./HeroSection.vue";
import Header from "./Header.vue";

export default {
  name: "Home",
  components: {
    ProductsList,
    CategoriesList,
    Navbar,
    Services,
    NewsLetter,
    Footer,
    HeroSection,
    Header,
  },
};
</script>
<style>
@import url("../assets/mycss.css");
</style>