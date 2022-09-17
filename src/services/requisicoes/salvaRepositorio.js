import api from '../api'

export default async function salvarRepositorio(postId, nome, data, id) {
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
