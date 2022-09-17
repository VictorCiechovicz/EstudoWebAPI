import api from '../api'

export default async function criarRepositorio(postId, nome, data) {
  try {
    await api.post(`/repos/`, {
      name: nome,
      data: data,
      postId: postId,

    })
    return 'Sucesso!'
  } catch (error) {
    console.log(error)
    return 'erro'
  }
}
