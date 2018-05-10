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
import { contactsService } from '../utils/ContactsService.js'
import ContactList from '../components/ContactList.vue'
import ContactDetails from '../components/ContactDetails.vue'

  export default {
    components: {
      ContactList,
      ContactDetails
    },
    data() {
      return {
        contacts: []
      }
    },
    created() {
      contactsService.getContacts().then(response => {
        this.contacts = response.data
      }).catch(error => {
        console.error(error)
      })
    },
    computed: {
      routeContact() {
        return this.contacts.find(contact => contact.id == this.$route.params.id)
      }
    }
  }
</script>
