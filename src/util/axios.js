import axios from 'axios';

const instance = axios.create({
    baseURL:"https://dev.sellix.io/v1"
});

export default instance;