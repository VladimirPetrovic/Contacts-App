<template>
  <div>
    <div class="card">
      <ul class="list-group list-group-flush" v-if="contact">
        <li class="list-group-item"><i class="fas fa-user fa-fw"></i>{{ contact.first_name }}</li>
        <li class="list-group-item"><i class="fas fa-user fa-fw"></i>{{ contact.last_name }}</li>
        <li class="list-group-item"><i class="fas fa-envelope fa-fw"></i>{{ contact.email }}</li>
        <li class="list-group-item"><i class="fas fa-phone fa-fw"></i>{{ contact.number }}</li>
        <li class="list-group-item">
          <i class="fa fa-trash-alt mr-4 btn btn-danger" @click="deleteContact(contact.id)"></i>
          <router-link :to="{ name: 'edit-contact', params: { id: contact.id }}">
            <i class="fa fa-pencil-alt btn btn-secondary mr-4"></i>
          </router-link>
        </li>
      </ul>
      <div class="card-body" v-else>
        &larr; Please select a contact you want to see or click <router-link to="/add-contact">here</router-link> to create a new contact.
      </div>
    </div>
  </div>
</template>

<script>
import { contactsService } from '../utils/ContactsService.js'

export default {
  props: ['contact'],
  methods: {
    deleteContact(id) {
      if(confirm('Are you sure you want to delete this contact?')) {
        contactsService.deleteContact(id).then(() => {
          this.$emit('onDelete', id)
        }).catch(error => {
          console.error(error)
        })
      }
    }
  }
}
</script>
