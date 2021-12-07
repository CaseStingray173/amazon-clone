import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/clone-6533c/us-central1/api" // THE AIP {cloud function} URL
});

export default instance;