import axios from "axios";

const strapiApi = axios.create({
  baseURL: process.env.NEXT_BASE_URL,
});

export default strapiApi;
