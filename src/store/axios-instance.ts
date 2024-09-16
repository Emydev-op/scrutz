import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://infinion-test-int-test.azurewebsites.net",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);
