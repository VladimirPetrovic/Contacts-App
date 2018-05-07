<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <ContactList :contacts="contacts" />
      </div>
      <div class="col-8">
        <ContactDetails :contact="routeContact" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ContactList from '../components/ContactList.vue'
import ContactDetails from '../components/ContactDetails.vue'

  export default {
    components: {
      ContactList,
      ContactDetails
    },
    data() {
      return {
        contacts: [
          { id: 1, name: 'John Doe', email: 'johndoe@example.com', number: '555-12345' },
          { id: 2, name: 'Pera Peric', email: 'peraperic@example.com', number: '555-54321' },
          { id: 3, name: 'Nenad Vujicic', email: 'nenad.v@example.com', number: '555-67890' }
        ]
      }
    },
    computed: {
      routeContact() {
        return this.contacts.find(contact => contact.id == this.$route.params.id)
      }
    }
  }
</script>
