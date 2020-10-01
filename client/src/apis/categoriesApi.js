import axios from 'axios';
import backendUrl from './backend-url';

const api = axios.create({
    baseURL:`${backendUrl}/category`
})

export const getAllCategories = async () => {
    const res = await api.get('/');
    return res.data.data;
}

