<template>
  <div class="page page_onboarding">
    <div class="container">
      <h1 class="page__title text-center">{{ title }}</h1>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.page.page_onboarding {
  max-width: 374px;
  width: 100%;
  margin: 0 auto;
}
.page__title {
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  color: var(--body-color);
  margin: 0 0 32px;
}
.text-center {
  text-align: center;
}
@media all and (max-width: 992px) {
  .container {
    padding: 0 16px;
  }
}
</style>
