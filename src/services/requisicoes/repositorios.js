import api from '../api'

export default async function buscarRepositorio() {
  try {
    const resultado = await api.get(`/repos?postId=`)
    return resultado.data[0]
  } catch (error) {
    console.log(error)
    return {}
  }
}
