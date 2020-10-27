import axios from 'axios';
import backendUrl from './backend-url';

const api = axios.create({
    baseURL: `${backendUrl}/ticket`
})

export const getAllTickets = async () => {
    const res = await api.get('/');
    return res.data.data;
}

export const createTickets = async (ticket) => {
    const res = await api.post('/',ticket);
    return res.data.data;
}

export const updateTicket = async (ticket,id) => {
    ticket.seller_Id=ticket.seller_Id._id
    if(ticket.category_Id._id){   
         ticket.category_Id=ticket.category_Id._id
    }
    const res = await api.put('/' + id,ticket);
    return res.data.data;
}

export const deleteTicket = async (id) => {
    const res = await api.delete('/' + id);
    return res.data;
}

export const getTicketById = async (id) => {
    const res = await api.get(`/${id}`);
    return res.data.data;
}