<template>
  <header class="header bg-white">
    <div class="container px-lg-3">
      <b-navbar
        toggleable="lg"
        type="dark"
        variant="white"
        class="py-3 py-lg-2"
      >
        <b-navbar-brand>
          <router-link class="navbar-brand" :to="{ name: 'home' }"
            ><span class="fw-bold text-uppercase text-dark"
              >LaraXVue</span
            ></router-link
          ></b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse" variant="dark">
          <b-icon
            icon="three-dots"
            animation="cylon"
            variant="dark"
            font-scale="1.5"
          ></b-icon>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="">
            <b-nav-item>
              <router-link
                class="nav-link"
                :class="[$route.name === 'home' ? 'text-warning' : 'text-dark']"
                :to="{ name: 'home' }"
                >Home</router-link
              ></b-nav-item
            >
            <b-nav-item>
              <router-link
                class="nav-link"
                :class="[
                  $route.name === 'shop' ? 'text-warning' : ' text-dark',
                ]"
                :to="{ name: 'shop' }"
                >Shop</router-link
              ></b-nav-item
            >
          </b-navbar-nav>
          <b-navbar-nav class="ms-auto">
            <b-nav-item class="">
              <router-link
                class="nav-link"
                :class="[$route.name === 'cart' ? 'text-warning' : 'text-dark']"
                :to="{ name: 'cart' }"
              >
                <i class="fas fa-dolly-flatbed me-1 text-gray"></i>Cart<small
                  class="text-gray fw-normal"
                  >({{ cart.products.length }})</small
                ></router-link
              ></b-nav-item
            >
            <b-nav-item class="nav-item">
              <a class="nav-link" href="#!">
                <b-icon icon="heart" class="me-1" variant="dark"></b-icon
                ><small class="text-gray fw-normal"> (0)</small></a
              >
            </b-nav-item>
            <b-nav-item class="nav-item" v-if="!auth">
              <router-link
                class="nav-link"
                :class="[
                  $route.name === 'login' ? 'text-warning' : 'text-dark',
                ]"
                :to="{ name: 'login' }"
              >
                <i class="fas fa-user me-1 text-gray fw-normal"></i
                >Login</router-link
              >
            </b-nav-item>
            <b-nav-item class="nav-item" v-else>
              <a class="nav-link text-dark" @click="logout">
                <i class="fas fa-user me-1 text-gray fw-normal"></i>Logout
              </a>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      auth: null,
    };
  },
  computed: mapGetters(["cart"]),
  methods: {
    ...mapActions(["getCart"]),
    logout() {
      localStorage.removeItem("auth");
      this.auth = null;
    },
  },
  created() {
    this.getCart();
  },
  mounted() {
    let authen = localStorage.getItem("auth");
    if (authen) this.auth = authen;
  },
};
</script>

<style scoped>
</style>