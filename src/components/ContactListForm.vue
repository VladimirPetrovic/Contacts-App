<template>
  <div>
    <div class="list-group">
      <router-link
        class="list-group-item list-group-item-action"
        tag="button"
        exact-active-class="active"
        v-for="(contact, key) in contacts"
        :key="key"
        :to="{ name: 'contact-details', params: { id: contact.id }}"
      >
        {{ contact.first_name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['contacts']
}
</script>