import axios from 'axios'

export default class AuthService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api/';
    }

    login(email, password) {
        return axios.post('login', {
            email,
            password
        }).then(({ data }) => {
            window.localStorage.setItem('loginToken', data.token)
            const TOKEN = `Bearer ${window.localStorage.getItem('loginToken')}`
            axios.defaults.headers.common['Authorization'] = TOKEN
        })
    }

    logout() {
        window.localStorage.removeItem('loginToken')
        delete axios.defaults.headers.common['Authorization']
    }

    isAuthenticated() {
        return !!window.localStorage.getItem('loginToken')
    }
}

export const authService = new AuthService()