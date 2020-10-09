import axios from 'axios';
import backendUrl from './backend-url';

const api = axios.create({
    baseURL:`${backendUrl}/ticket`
})

export const getAllTickets = async () => {
    const res = await api.get('/');
    return res.data.data;
}

export const deleteTicket = async () => {
    const res = await api.delete('/:id');
    return res.data.data;
}
