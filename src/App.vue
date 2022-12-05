<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
  mounted() {
    console.log(this.$store.state.Product.products);
  },
};
</script>

<style>
</style>
