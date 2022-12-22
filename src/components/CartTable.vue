<template>
  <div class="table-responsive mb-4">
    <table class="table text-nowrap" v-if="cart.products">
      <thead class="bg-light">
        <tr>
          <th class="border-0 p-3" scope="col">
            <strong class="text-sm text-uppercase">Product</strong>
          </th>
          <th class="border-0 p-3" scope="col">
            <strong class="text-sm text-uppercase">Price</strong>
          </th>
          <th class="border-0 p-3" scope="col">
            <strong class="text-sm text-uppercase">Quantity</strong>
          </th>
          <th class="border-0 p-3" scope="col">
            <strong class="text-sm text-uppercase">Total</strong>
          </th>
          <th class="border-0 p-3" scope="col">
            <strong class="text-sm text-uppercase"></strong>
          </th>
        </tr>
      </thead>
      <tbody
        class="border-0"
        v-for="{ product, quantity } in cart.products"
        :key="product.id"
      >
        <tr>
          <th class="ps-0 py-3 border-light" scope="row">
            <div class="d-flex align-items-center">
              <router-link
                class="reset-anchor d-block animsition-link"
                :to="{ name: 'product-detail', params: { id: product.id } }"
                ><img :src="product.image" alt="..." width="50"
              /></router-link>
              <div class="ms-3">
                <small class="">
                  <router-link
                    class="reset-anchor animsition-link"
                    :to="{
                      name: 'product-detail',
                      params: { id: product.id },
                    }"
                  >
                    <span v-if="product.title.length < 30">
                      {{ product.title }}
                    </span>
                    <span v-else>
                      {{ product.title.substring(0, 28) + "..." }}
                    </span>
                  </router-link>
                </small>
              </div>
            </div>
          </th>
          <td class="p-3 align-middle border-light">
            <p class="mb-0 small">${{ product.price }}</p>
          </td>
          <td class="p-3 align-middle border-light">
            <div
              class="
                border
                d-flex
                align-items-center
                justify-content-between
                px-3
              "
            >
              <span class="small text-uppercase text-gray headings-font-family"
                >Quantity</span
              >
              <div class="quantity">
                <button
                  class="dec-btn p-0"
                  @click="updateProductQuantityInCart(product, 'dec')"
                >
                  <i class="fas fa-caret-left"></i>
                </button>
                <input
                  type="text"
                  :value="quantity"
                  class="form-control form-control-sm border-0 shadow-0 p-0"
                />
                <button
                  class="inc-btn p-0"
                  @click="updateProductQuantityInCart(product, 'inc')"
                >
                  <i class="fas fa-caret-right"></i>
                </button>
              </div>
            </div>
          </td>
          <td class="p-3 align-middle border-light">
            <p class="mb-0 small">${{ quantity * product.price }}</p>
          </td>
          <td class="p-3 align-middle border-light">
            <a class="reset-anchor" @click="removeProductFromCart(product.id)"
              ><i class="fas fa-trash-alt small text-muted"></i
            ></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CartTable",
  methods: {
    ...mapActions(["updateCart", "removeFromCart", "getTotalPrice"]),
    async updateProductQuantityInCart(product, quantityUpd) {
      await this.updateCart({ product, quantityUpd });
      await this.getTotalPrice();
    },

    async removeProductFromCart(productId) {
      await this.removeFromCart(productId);
      await this.getTotalPrice();
    },
  },
  computed: mapGetters(["cart"]),
};
</script>