<template>
  <div class="col-lg-8">
    <form action="" @submit.prevent="sendEmail">
      <div class="row gy-3">
        <div class="col-lg-6">
          <label class="form-label text-sm text-uppercase" for="firstName"
            >First name
          </label>
          <input
            class="form-control form-control-lg"
            type="text"
            v-model="contactDetail.firstName"
            id="firstName"
            required
            placeholder="Enter your first name"
          />
        </div>
        <div class="col-lg-6">
          <label class="form-label text-sm text-uppercase" for="lastName"
            >Last name
          </label>
          <input
            class="form-control form-control-lg"
            type="text"
            v-model="contactDetail.lastName"
            id="lastName"
            required
            placeholder="Enter your last name"
          />
        </div>
        <div class="col-lg-6">
          <label class="form-label text-sm text-uppercase" for="email"
            >Email address
          </label>
          <input
            class="form-control form-control-lg"
            type="email"
            v-model="contactDetail.email"
            required
            id="email"
            placeholder="e.g. Jason@example.com"
          />
        </div>
        <div class="col-lg-6">
          <label class="form-label text-sm text-uppercase" for="phone"
            >Phone number
          </label>
          <input
            class="form-control form-control-lg"
            type="tel"
            id="phone"
            required
            v-model.number="contactDetail.phoneNo"
            placeholder="e.g. +02 245354745"
          />
        </div>
        <div class="col-lg-6">
          <label class="form-label text-sm text-uppercase" for="company"
            >Company name (optional)
          </label>
          <input
            class="form-control form-control-lg"
            type="text"
            id="company"
            v-model="contactDetail.companyName"
            placeholder="Your company name"
          />
        </div>

        <div class="col-lg-12">
          <label class="form-label text-sm text-uppercase" for="address"
            >Address line 1 (optional)
          </label>
          <input
            class="form-control form-control-lg"
            type="text"
            id="address"
            v-model="contactDetail.addressLine1"
            placeholder="House number and street name"
          />
        </div>
        <div class="col-lg-12">
          <label class="form-label text-sm text-uppercase" for="addressalt"
            >Address line 2 (optional)
          </label>
          <input
            class="form-control form-control-lg"
            type="text"
            v-model="contactDetail.addressLine2"
            id="addressalt"
            placeholder="Apartment, Suite, Unit, etc (optional)"
          />
        </div>
        <div class="col-lg-6">
          <label class="form-label text-sm text-uppercase" for="city"
            >Town/City
          </label>
          <input
            class="form-control form-control-lg"
            type="text"
            id="city"
            required
            v-model="contactDetail.city"
          />
        </div>
        <div class="col-lg-6">
          <label class="form-label text-sm text-uppercase" for="state"
            >State/County
          </label>
          <input
            class="form-control form-control-lg"
            type="text"
            id="state"
            required
            v-model="contactDetail.country"
          />
        </div>

        <div class="col-lg-12 form-group mb-4">
          <button class="btn btn-dark" type="submit">Place order</button>
        </div>
        <div>
          <b-alert
            v-if="order.status"
            :variant="[order.status ? 'success' : 'danger']"
            show
            >{{ order.statusText }}</b-alert
          >
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import emailjs from "emailjs-com";
import { mapGetters } from "vuex";
export default {
  name: "BillingAddress",
  data() {
    return {
      order: {
        status: null,
        statusText: "Your order is sending",
      },

      contactDetail: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        companyName: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        country: "",
      },
      orderDetail: "",
    };
  },
  computed: {
    ...mapGetters(["cart", "cartTotalPrice"]),
    name() {
      return this.contactDetail.firstName + " " + this.contactDetail.lastName;
    },
    contactDetailObject() {
      return `
      Phone No :  ${this.contactDetail.phoneNo}
      City :  ${this.contactDetail.city} 
      Country : ${this.contactDetail.country}`;
    },
    orderDetailObject() {
      this.cart.products.forEach((item) => {
        this.orderDetail += `${item.product.title} : ${item.quantity}
`;
      });
      // this.orderDetail = ` Total :   ${this.cartTotalPrice}`;
      return this.orderDetail;
    },
  },
  methods: {
    sendEmail() {
      try {
        emailjs
          .send(
            process.env.VUE_APP_SERVICE_ID,
            process.env.VUE_APP_TEMPLATE_ID,
            {
              name: this.name,
              email: this.contactDetail.email,
              contactDetail: this.contactDetailObject,
              orderDetail: this.orderDetailObject,
              totalPrice: this.cartTotalPrice,
            },
            process.env.VUE_APP_USER_ID
          )
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              this.order.status = true;
<<<<<<< HEAD
              this.order.statusText = "Yay! Your order is successfully sent :)";
=======
              this.order.statusText = "Yay! Your order is successfully sent..!";
>>>>>>> 26aca612ff9935745bf99d968cbf90a38b07c0fa
              this.$toaster.info("Your order is on the wayyy...");
            } else {
              this.order.status = false;
              this.order.statusText =
                "Oops! Your order failed. Please Try Again..!";
            }
          });
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.contactDetail.firstName = "";
      this.contactDetail.lastName = "";
      this.contactDetail.email = "";
      this.contactDetail.phoneNo = "";
      this.contactDetail.companyName = "";
      this.contactDetail.addressLine1 = "";
      this.contactDetail.addressLine2 = "";
      this.contactDetail.city = "";
      this.contactDetail.country = "";
      this.orderDetail = "";
    },
  },
};
</script>