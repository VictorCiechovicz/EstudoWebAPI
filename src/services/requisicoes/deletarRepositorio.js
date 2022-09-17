import api from '../api'

export default async function deletarRepositorio(id) {
  try {
    await api.delete(`/repos/${id}`, {})
    return 'Sucesso!'
  } catch (error) {
    console.log(error)
    return 'erro'
  }
}
