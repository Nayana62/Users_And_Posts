import axios from "axios";

const API = axios.create({
  baseURL: "https://64cb8f7f700d50e3c7061cf4.mockapi.io/api",
});

export default API;
