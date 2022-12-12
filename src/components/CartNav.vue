<template>
  <div class="bg-light px-4 py-3">
    <div class="row align-items-center text-center">
      <div class="col-md-6 mb-3 mb-md-0 text-md-start">
        <router-link
          class="btn btn-link p-0 text-dark btn-sm"
          :to="{ name: 'shop' }"
          ><i class="fas fa-long-arrow-alt-left me-2"> </i>Continue
          shopping</router-link
        >
      </div>
      <div class="col-md-6 text-md-end">
        <router-link
          :to="{ name: 'checkout' }"
          class="btn btn-outline-dark btn-sm"
          >Procceed to checkout<i class="fas fa-long-arrow-alt-right ms-2"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>