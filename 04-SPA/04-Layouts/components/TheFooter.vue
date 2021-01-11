<template>
  <footer class="footer">
    <div class="container">
      This is Footer
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style scoped>
.footer {
  padding: 100px 0 60px;
  text-align: center;
}
.container {
  max-width: 1008px;
  width: 100%;
  margin: 0 auto;
}
@media all and (max-width: 992px) {
  .container {
    padding: 0 16px;
  }
}
</style>
