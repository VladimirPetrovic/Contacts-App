<template>
  <div>
    <form class="col-6 mt-2" @submit.prevent="addContact()">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" v-model="contact.first_name" class="form-control" id="firstName" placeholder="Enter first name">
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" v-model="contact.last_name" class="form-control" id="lastName" placeholder="Enter first name">
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" v-model="contact.email" class="form-control" id="email" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="phone" v-model="contact.number" class="form-control" id="phone" placeholder="Enter phone">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
    props: ['contact'],
    methods: {
        addContact() {
            this.$emit('addContact')
        }
    }
}
</script>
