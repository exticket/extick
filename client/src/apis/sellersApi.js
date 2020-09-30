import axios from 'axios';
import backendUrl from './backend-url';

const api = axios.create({
    baseURL:`${backendUrl}/seller`
})

export const getAllSellers = async () => api.get('/');

