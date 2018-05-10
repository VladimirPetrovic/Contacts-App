import axios from 'axios'
export default class ContactsService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/';
    }

    getContacts() {
        return axios.get('contacts')
    }
    addContact(contact) {
        return axios.post('contacts', contact)
    }
}

export const contactsService = new ContactsService();