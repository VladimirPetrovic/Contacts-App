import axios from 'axios'

export default class ContactsService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api/';
    }

    getContacts() {
        return axios.get('contacts')
    }
    addContact(contact) {
        return axios.post('contacts', contact)
    }
    getContact(id) {
        return axios.get('contacts/'+ id)
    }
    deleteContact(id) {
        return axios.delete('contacts/' + id)
    }
    updateContact(contact) {
        return axios.put('contacts/' + contact.id, contact)
    }
}

export const contactsService = new ContactsService();