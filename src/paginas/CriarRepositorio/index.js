import React, { useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import estilos from './estilos'
import criarRepositorio from '../../services/requisicoes/criarRepositorio'

export default function CriarRepositorio({ route, navigation }) {
  const [nome, setNome] = useState('')
  const [data, setData] = useState('')

  async function criar() {
    const resultado = await criarRepositorio(
      route.params.item.postId,
      nome,
      data,
      route.params.item.id
    )
    if (resultado === 'Sucesso!') {
      Alert.alert('Repositorio atualizado')
      navigation.goBack()
    } else {
      Alert.alert('Erro ao atualizar repositorio')
    }
  }
  return (
    <View style={estilos.container}>
      <TextInput
        placeholder="Nome do repositório"
        autoCapitalize="none"
        style={estilos.entrada}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Data de criação"
        autoCapitalize="none"
        style={estilos.entrada}
        value={data}
        onChangeText={setData}
      />
      <TouchableOpacity onPress={criar} style={estilos.botao}>
        <Text style={estilos.textoBotao}>Criar</Text>
      </TouchableOpacity>
    </View>
  )
}
