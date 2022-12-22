<template>
  <div id="app">
    <base-layout>
      <router-view></router-view>
    </base-layout>
  </div>
</template>


<script>
import BaseLayout from "./components/layout/BaseLayout.vue";
export default {
  name: "App",
  components: { BaseLayout },
};
</script>

<style>
</style>
