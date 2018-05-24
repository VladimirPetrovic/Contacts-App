<template>
  <div class="container mt-2">
    <form @submit.prevent="login" class="col-4">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          v-model="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
          autofocus>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          v-model="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
  </form>
  </div>
</template>

<script>

import { authService } from '../utils/AuthService'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      authService.login(this.email, this.password).then(() => {
        this.$router.push({ name: 'contacts-list'})
      })
    }
  }
}
</script>