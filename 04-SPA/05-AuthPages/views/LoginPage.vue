<template>
  <form
    class="form"
    @submit.prevent="onSubmit">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input
          v-model="email"
          ref="emailField"
          type="email"
          placeholder="demo@email"
          class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input
          v-model="password"
          type="password"
          placeholder="password"
          class="form-control" />
      </div>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary button_block">Войти</button>
    </div>
    <div class="form__append">Нет аккаунта? <router-link :to="{ name: 'Register' }" class="link">Зарегистрируйтесь</router-link></div>
  </form>
</template>

<script>
import { login } from '../data';

export default {
  name: 'LoginPage',
  mounted() {
    this.$refs['emailField'].focus();
  },
  data: () => ({
    email: null,
    password: null,
  }),
  methods: {
    async onSubmit() {
      if (!this.email) {
        alert('Требуется ввести Email');
        return;
      }
      if (!this.password) {
        alert('Требуется ввести пароль');
        return;
      }
      const { statusCode, message, fullname } = await login(this.email, this.password)

      if (statusCode >= 400) {
        alert(message || 'error');
      }
      alert(fullname);
      return;
    },
  },
};
</script>

<style scoped></style>
