import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://10.0.2.2:3001",
});

export const axiosWeatherInstance = axios.create({
  baseURL: "https://api.weatherbit.io/v2.0/current",
});
