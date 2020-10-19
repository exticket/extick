import axios from 'axios';
import backendUrl from './backend-url';

const api = axios.create({
    baseURL:`${backendUrl}/seller`
})

export const getAllSellers = async () => {
    const res = await api.get('/');
    return res.data.data;
}

export const createSeller = async (seller) => {
    const res = await api.post('/', seller);
    return res.data.id;
}

