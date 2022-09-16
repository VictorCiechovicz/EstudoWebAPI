import axios from 'axios'

//constante para fazer a conexão com nossa API
const api = axios.create({
  baseURL: 'http://192.168.0.103:3000/'
})

export default api
