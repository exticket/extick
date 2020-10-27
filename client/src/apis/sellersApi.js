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

export const updateSeller = async (seller) => {
    const res = await api.put(`/${seller._id}`, seller);
    return res.data;
}

export const deleteSeller = async (id) => {
    const res = await api.delete('/' + id);
    return res.data;
}
