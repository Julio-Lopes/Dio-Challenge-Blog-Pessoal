import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://qualmmsjjcphwnxpvcnq.supabase.co/rest/v1/',
    headers: {
        apikey: "",
        Authorization: ""
    }
});