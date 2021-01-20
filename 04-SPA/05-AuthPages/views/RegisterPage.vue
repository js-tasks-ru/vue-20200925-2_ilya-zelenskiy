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
          class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Имя</label>
      <div class="input-group">
        <input
          v-model="fullName"
          type="text"
          class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input
          v-model="password"
          type="password"
          class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Повтор пароля</label>
      <div class="input-group">
        <input
          v-model="passwordRepeat"
          type="password"
          class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="checkbox">
        <input
          v-model="agree"
          type="checkbox" />
        Я согласен с условиями<span></span>
      </label>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary">Зарегистрироваться</button>
    </div>
    <div class="form__append">Уже есть аккаунт? <router-link :to="{ name: 'Login' }" class="link">Войдите</router-link></div>
  </form>
</template>

<script>
import { register } from '../data';

export default {
  name: 'RegisterPage',
  mounted() {
    this.$refs['emailField'].focus();
  },
  data: () => ({
    email: null,
    fullName: null,
    password: null,
    passwordRepeat: null,
    agree: false,
  }),
  methods: {
    async onSubmit() {
      if (!this.email) {
        alert('Требуется ввести Email');
        return;
      }
      if (!this.fullName) {
        alert('Требуется ввести полное имя');
        return;
      }
      if (!this.password) {
        alert('Требуется ввести пароль');
        return;
      }
      if (this.password !== this.passwordRepeat) {
        alert('Пароли не совпадают');
        return;
      }
      if (!this.agree) {
        alert('Требуется согласиться с условиями');
        return;
      }
      const {
        statusCode,
        message,
        id,
        fullName,
        email,
      } = await register(this.email, this.fullName, this.password)
      if (statusCode >= 400) {
        alert(message || 'some error');
      }
      alert(id)
    },
  },
};
</script>

<style scoped></style>
