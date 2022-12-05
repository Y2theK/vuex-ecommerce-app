<template>
  <div>
    <!--  Modal -->
    <div class="modal fade" id="productView" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content overflow-hidden border-0">
          <button
            class="
              btn-close
              p-4
              position-absolute
              top-0
              end-0
              z-index-20
              shadow-0
            "
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div class="modal-body p-0">
            <div class="row align-items-stretch">
              <div class="col-lg-6 p-lg-0">
                <a
                  class="
                    glightbox
                    product-view
                    d-block
                    h-100
                    bg-cover bg-center
                  "
                  style="background: url(../../template/img/product-5.jpg)"
                  href="../../template/img/product-5.jpg"
                  data-gallery="gallery1"
                  data-glightbox="Red digital smartwatch"
                ></a
                ><a
                  class="glightbox d-none"
                  href="../../template/img/product-5-alt-1.jpg"
                  data-gallery="gallery1"
                  data-glightbox="Red digital smartwatch"
                ></a
                ><a
                  class="glightbox d-none"
                  href="../../template/img/product-5-alt-2.jpg"
                  data-gallery="gallery1"
                  data-glightbox="Red digital smartwatch"
                ></a>
              </div>
              <div class="col-lg-6">
                <div class="p-4 my-md-4">
                  <ul class="list-inline mb-2">
                    <li class="list-inline-item m-0">
                      <i class="fas fa-star small text-warning"></i>
                    </li>
                    <li class="list-inline-item m-0 1">
                      <i class="fas fa-star small text-warning"></i>
                    </li>
                    <li class="list-inline-item m-0 2">
                      <i class="fas fa-star small text-warning"></i>
                    </li>
                    <li class="list-inline-item m-0 3">
                      <i class="fas fa-star small text-warning"></i>
                    </li>
                    <li class="list-inline-item m-0 4">
                      <i class="fas fa-star small text-warning"></i>
                    </li>
                  </ul>
                  <h2 class="h4">Red digital smartwatch</h2>
                  <p class="text-muted">$250</p>
                  <p class="text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    ut ullamcorper leo, eget euismod orci. Cum sociis natoque
                    penatibus et magnis dis parturient montes nascetur ridiculus
                    mus. Vestibulum ultricies aliquam convallis.
                  </p>
                  <div class="row align-items-stretch mb-4 gx-0">
                    <div class="col-sm-7">
                      <div
                        class="
                          border
                          d-flex
                          align-items-center
                          justify-content-between
                          py-1
                          px-3
                        "
                      >
                        <span
                          class="small text-uppercase text-gray mr-4 no-select"
                          >Quantity</span
                        >
                        <div class="quantity">
                          <button class="dec-btn p-0">
                            <i class="fas fa-caret-left"></i>
                          </button>
                          <input
                            class="form-control border-0 shadow-0 p-0"
                            type="text"
                            value="1"
                          />
                          <button class="inc-btn p-0">
                            <i class="fas fa-caret-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-5">
                      <a
                        class="
                          btn btn-dark btn-sm
                          w-100
                          h-100
                          d-flex
                          align-items-center
                          justify-content-center
                          px-0
                        "
                        href="cart.html"
                        >Add to cart</a
                      >
                    </div>
                  </div>
                  <a
                    class="btn btn-link text-dark text-decoration-none p-0"
                    href="#!"
                    ><i class="far fa-heart me-2"></i>Add to wish list</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="py-5">
      <header>
        <p class="small text-muted small text-uppercase mb-1">
          Made the hard way
        </p>
        <h2 class="h5 text-uppercase mb-4">Top trending products</h2>
      </header>
      <div class="row">
        <Product />
      </div>
    </section>
  </div>
</template>
       
<script>
import Product from "./Product.vue";
export default {
  name: "ProductsList",
  components: {
    Product,
  },
};
</script>

<style>
/* <!-- gLightbox gallery--> */
@import url("../../template/vendor/glightbox/css/glightbox.min.css");
/* <!-- Range slider--> */
@import url("../../template/vendor/nouislider/nouislider.min.css");
/* <!-- Choices CSS--> */
@import url("../../template/vendor/choices.js/public/assets/styles/choices.min.css");
/* <!-- Swiper slider--> */
@import url("../../template/vendor/swiper/swiper-bundle.min.css");
/* <!-- Google fonts--> */
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;700&amp;display=swap");
@import url("https://fonts.googleapis.com/css2?family=Martel+Sans:wght@300;400;800&amp;display=swap");
/* <!-- Custom stylesheet - for your changes--> */
@import url("../../template/css/custom.css");
@import url("../../template/css/style.default.css");
</style>