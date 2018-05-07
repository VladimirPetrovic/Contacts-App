<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">My Contacts</router-link>
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="/contacts">Contacts</router-link>
          <router-link class="nav-item nav-link" to="/add-contact">Add contact</router-link>
        </div>
    </nav>
  </div>
</template>

<script>
  export default {

  }
</script>