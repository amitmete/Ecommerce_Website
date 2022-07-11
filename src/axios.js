import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/ecommerce-website-515dd/us-central1/api' // ThE API (cloud dunction) URL
});

export default instance;