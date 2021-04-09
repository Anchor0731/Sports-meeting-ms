import axios from "axios";

export const register = (account, password) => {
  return axios.post('http://localhost:3000/auth/register', {
    account,
    password
  })
}

export const login = (account, password) => {
  return axios.post('http://localhost:3000/auth/login', {
    account,
    password
  })
}