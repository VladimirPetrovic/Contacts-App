<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <ContactList :contacts="contacts" />
      </div>
      <div class="col-8">
        <ContactDetails />
      </div>
    </div>
  </div>
</template>

<script>
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
          { name: 'John Doe' },
          { name: 'Jane Doe' },
          { name: 'Doe Doe' }
        ]
      }
    }
  }
</script>
