import axios from "axios";

const apiLogger = (msg: string, color: string, params: any) => {
  if (process.env.REACT_APP_LOGGING_REQUEST === "true")
    console.log(msg, color, params);
};

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response: any) => {
    apiLogger("%c Response ", "background: #69CA6D; color: #fff", response);
    const status = response?.status;
    if (status === 200) {
      return response;
    }
    return Promise.reject(response);
  },
  async (error: any) => {
    apiLogger("%c Response ", "background: #E41F00; color: #fff", error);
  }
);

export const sendGet = async (url: string, params: any = {}) =>
  axiosClient.get(url, { params }).then((res: { data: any }) => res?.data);

export const sendPost = async (url: string, data?: any, config: any = {}) =>
  axiosClient.post(url, data, config).then((res: { data: any }) => res?.data);

export const sendPut = async (url: string, data?: any, config: any = {}) =>
  axiosClient.put(url, data, config).then((res: { data: any }) => res?.data);

export const sendDelete = async (url: string, params: any = {}) =>
  axiosClient.delete(url, { params }).then((res: { data: any }) => res?.data);
