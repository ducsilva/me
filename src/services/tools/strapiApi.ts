import axios from "axios";

const strapiApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 5000,
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
});

export default strapiApi;
