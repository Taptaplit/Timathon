import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://miniboard-backend.herokuapp.com/'
})


export default instance;