<template>
  <div>
    <form class="col-6 mt-2" @submit.prevent="addContact()">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" v-model="contact.first_name" class="form-control" id="firstName">
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" v-model="contact.last_name" class="form-control" id="lastName">
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" v-model="contact.email" class="form-control" id="email">
      </div>
      <div class="form-group">
        <label for="number">Number</label>
        <input type="number" v-model="contact.number" class="form-control" id="number">
      </div>
      <button type="submit" class="btn btn-primary mr-2">Submit</button>
      <button type="reset" class="btn btn-warning mr-2">Reset</button>
      <router-link :to="{name: 'contacts-list'}" class="btn btn-secondary">Cancel</router-link>
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
