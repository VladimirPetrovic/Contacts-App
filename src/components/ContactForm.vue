<template>
  <div>
    <form class="col-6 mt-2" v-validate="validationConfig">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          type="text"
          v-model="contact.first_name"
          name="first_name"
          v-focus-on
          class="form-control"
          id="firstName">
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          name="last_name"
          v-model="contact.last_name"
          class="form-control"
          id="lastName">
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="text"
          name="email"
          v-model="contact.email"
          class="form-control"
          id="email">
      </div>
      <div class="form-group">
        <label for="number">Number</label>
        <input
          name="number"
          type="number"
          v-model="contact.number"
          class="form-control"
          id="number">
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
        manageContact() {
            this.$emit('manageContact')
        }
    },
    data() {
      return {
        validationConfig: {
          validationRules: {
            email: ['required', 'email']
          },
          submitCallback: () => {
            this.manageContact()
          }
        }
      }
    }
}
</script>
