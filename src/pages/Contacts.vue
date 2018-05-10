<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <contact-list-form :contacts="contacts" />
      </div>
      <div class="col-8">
        <contact-details :contact="routeContact" @onDelete="onDelete"/>
      </div>
    </div>
  </div>
</template>

<script>
import { contactsService } from '../utils/ContactsService.js'
import ContactListForm from '../components/ContactListForm.vue'
import ContactDetails from '../components/ContactDetails.vue'

export default {
  components: {
    ContactListForm,
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
  },
  methods: {
    onDelete(id) {
      let index = this.contacts.findIndex(contact => contact.id == id)
      this.contacts.splice(index, 1)
    }
  }
}
</script>
