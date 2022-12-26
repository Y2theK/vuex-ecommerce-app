<template >
  <section class="py-5 mb-5">
    <div
      class="container py-5 d-flex justify-content-center align-items-center"
    >
      <form action="post" @submit.prevent="login" class="form">
        <div class="row gy-3">
          <div class="col-lg-12">
            <label class="form-label text-sm text-uppercase" for="email"
              >Email address
            </label>
            <input
              class="form-control form-control-lg"
              type="email"
              v-model="email"
              required
              id="email"
              placeholder="e.g. Jason@example.com"
            />
          </div>
          <div class="col-lg-12">
            <label class="form-label text-sm text-uppercase" for="password"
              >Password
            </label>
            <input
              class="form-control form-control-lg"
              type="text"
              v-model="password"
              id="password"
              required
              placeholder="Enter your password"
            />
          </div>
          <small class="text-danger text-sm-center" v-if="message">{{
            message
          }}</small>
          <div class="col-lg-12 mt-4 form-group d-block">
            <button class="btn btn-dark btn-block" type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },
  mounted() {
    if (localStorage.getItem("auth")) {
      this.$router.go(-1);
      this.$toaster.warning("You have already login. Enjoy shopping :)");
    }
  },
  methods: {
    login() {
      if (this.email === "admin@admin.com" && this.password === "admin123") {
        localStorage.setItem("auth", this.email);
        this.$toaster.success("You have successfully login :)");
        this.$router.go(-1);
      } else {
        this.message = "Please enter correct email and password!";
      }
    },
  },
};
</script>
