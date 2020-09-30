import axios from 'axios';
import backendUrl from './backend-url';

const api = axios.create({
    baseURL:`${backendUrl}/login`
})
export async function loginRequest(email, password) {
    const resp = await api.post("/", {
        email,
        password
    });

    return resp;
}