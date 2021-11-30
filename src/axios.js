import axios from "axios";

const instance = axios.create({
    baseURL: "..." // THE AIP {cloud function} URL
});

export default instance;