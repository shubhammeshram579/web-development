import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Change to your deployed backend URL later
});

export default api;
