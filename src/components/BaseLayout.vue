<template>
  <!DOCTYPE html>
  <html>
    <Header />
    <body>
      <div class="page-holder">
        <!-- navbar-->
        <Navbar />

        <slot></slot>

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

<style>
@import url("../assets/mycss.css");
</style>
<script>
import Header from "./Header.vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
export default {
  name: "BaseLayout",
  components: {
    Header,
    Navbar,
    Footer,
  },
};
</script>
