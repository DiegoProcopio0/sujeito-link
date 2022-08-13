import axios from "axios";

export const key = "d5763ced717dbf10e1709c090afc4c7c77defa9b";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
