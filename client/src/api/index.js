import axios from 'axios';
import { HOST } from '../conf';

const API = axios.create({
    baseURL: HOST
});

export default {
    async userLogin(user) {
        try {
            const response = await API.post('api/users/login', { ...user });
            return response.data;
        } catch(e) {
            alert(`Error - ${e.response.data.message}`);
        }
    },
    async updateUserProfile(user) {
        try {
            const response = await API.patch(`api/users/${user._id}`, { ...user });
            return response.data;
        } catch(e) {
            alert(`Error - ${e.response.data.message}`);
        }
    },
    async userRegistation(user) {
        try {
            const response = await API.put('api/users/register', { ...user });
            return response.data;
        } catch(e) {
            alert(`Error - ${e.response.data.message}`);
        }
    },
    async getUsersExcept(user) {
        try {
            const response = await API.get(`api/users/exclude/${user._id}`);
            return response.data;
        } catch(e) {
            alert(`Error - ${e.response.data.message}`);
        }
    },
}