import * as axios from "axios";
const baseUrl = "http://localhost:3001/api/v1";

export const instanseWithoutToken = () => {
  return axios.create({
    withCredentials: true,
    baseURL: `${baseUrl}`,
  })
}

export const instanse = () => {
  return axios.create({
    withCredentials: true,
    baseURL: `${baseUrl}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
  })
}