import api from '../api'

export default async function buscarRepositorio(id) {
  try {
    const resultado = await api.get(`/repos?postId=${id}`)
    return resultado.data
  } catch (error) {
    console.log(error)
    return []
  }
}

