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
      if (this.$route.params.id) {
        contactsService.updateContact(this.contact).then(() => {
          this.$router.push({name: 'contacts-list'})
        }).catch(error => {
          console.error(error)
        })
      } else {
        contactsService.addContact(this.contact).then(() => {
          this.$router.push({name: 'contacts-list'})
        }).catch(error => {
          console.error(error)
        })
      }
    }
  },
  created() {
    if (this.$route.params.id) {
      contactsService.getContact(this.$route.params.id).then(response => {
        this.contact = response.data
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>
