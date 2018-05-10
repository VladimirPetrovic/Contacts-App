<template>
  <div>
    <contact-form :contact="contact" @addContact="addContact"/>
  </div>
</template>

<script>
import { contactsService } from '../utils/ContactsService.js'
import ContactForm from '../components/ContactForm.vue'

export default {
  components: {
    ContactForm
  },
  data() {
    return {
      contact: {
        first_name: '',
        last_name: '',
        email: '',
        number: ''
      }
    }
  },
  methods: {
    addContact() {
      contactsService.addContact(this.contact).then(() => {
        this.$router.push('/contacts')
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>
