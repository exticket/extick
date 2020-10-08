import axios from 'axios';
import backendUrl from './backend-url';

const api = axios.create({
    baseURL:`${backendUrl}/authentication`
})
export async function loginRequest(email, password) {
    const resp = await api.post("/login", {
        email,
        password
    });

    return resp;
}
export async function logoutRequest() {
    const res = await api.get('/logout');
    return res.message;
}