import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const getUsers = () => axios.get(`${BASE_URL}/users`).then(res => res.data);

export const createUser = (userData) => axios.post(`${BASE_URL}/users`, userData).then(res => res.data);
