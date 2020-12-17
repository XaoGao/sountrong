import * as axios from "axios";
const baseUrl = "http://localhost:3001/api/v1/";

export const instanseWithoutToken = () => {
  return axios.create({
    baseURL: `${baseUrl}`,
  })
}

export const instanse = () => {
  return axios.create({
    baseURL: `${baseUrl}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
  })
}