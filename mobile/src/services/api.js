import axios from 'axios'

const api = axios.create({
    baseURL:'http://192.168.12.160:3333'
});

export default api;