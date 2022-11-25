import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-pizza-8d498-default-rtdb.firebaseio.com/'
});

export default instance;