import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://thinkpro.vn/front-store/filters",
});

export default axiosInstance;
