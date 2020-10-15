import axios from 'axios';
import backendUrl from './backend-url';

const api = axios.create({
    baseURL:`${backendUrl}/ticket`
})

export const getAllTickets = async () => {
    const res = await api.get('/');
    return res.data.data;
}
export const createTickets = async () => {
    const res = await api.POST('/');
    return res.data.data;

}

