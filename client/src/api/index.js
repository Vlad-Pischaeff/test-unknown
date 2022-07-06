import axios from 'axios';
import { HOST } from '../conf';

export default axios.create({
    baseURL: HOST
});
