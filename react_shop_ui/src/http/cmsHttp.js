import axios from "axios";
import { fromStorage } from "../lib/functions";

let headers = { Accept: "application/json" };
let token = fromStorage("admin_token");
if (token) {
    headers = {
        ...headers,
        'Authorization': `Bearer ${token}`,
    };
}

// commonly use hue confugration set garne
const cmsHttp = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers,
});
export default cmsHttp;
