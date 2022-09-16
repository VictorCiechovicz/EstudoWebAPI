import api from '../api'

export async function buscarRepositorio(id) {
  try {
    const resultado = await api.get(`/repos?postId=${id}`)
    return resultado.data
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function salvarRepositorio(postId, nome, data, id) {
  try {
    await api.put(`/repos/${id}`, {
      name: nome,
      data: data,
      postId: postId,
      id: id
    })
    return 'Sucesso!'
  } catch (error) {
    console.log(error)
    return 'erro'
  }
}
