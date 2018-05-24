<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">My Contacts</router-link>
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="/contacts">Contacts</router-link>
          <router-link class="nav-item nav-link" to="/add-contact">Add contact</router-link>
          <router-link class="nav-item nav-link" to="/login" v-if="!isAuthenticated">Login</router-link>
          <a href="" class="nav-item nav-link" @click="logout()" v-if="isAuthenticated">Logout</a>
        </div>
    </nav>
  </div>
</template>

<script>

import { authService } from '../utils/AuthService'

export default {
  data() {
    return {
      isAuthenticated: authService.isAuthenticated()
    }
  },
  methods: {
    logout() {
      authService.logout()
      this.isAuthenticated = false;
      this.$router.push( { name: 'login'} )
    }
  }
}
</script>