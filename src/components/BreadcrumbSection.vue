<template>
  <section class="py-5 bg-light">
    <div class="container">
      <div class="row px-4 px-lg-5 py-lg-4 align-items-center">
        <div class="col-lg-6">
          <h1 class="h2 text-uppercase mb-0">{{ BreadcrumbTitle }}</h1>
        </div>
        <div class="col-lg-6 text-lg-end">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
              <slot name="BreadcrumbLists"></slot>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    BreadcrumbTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>