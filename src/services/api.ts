import axios from "axios";

export const api = axios.create({
  baseURL: "https://juniorjobsapi.onrender.com",
  timeout: 10000,
});
