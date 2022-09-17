import React, { useState } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView
} from 'react-native'

import estilos from './estilos'
import buscarUsuario from '../../services/requisicoes/usuarios'

export default function Principal({ navigation }) {
  const [nomeUsuario, setNomeUsuario] = useState('')
  const [usuario, setUsuario] = useState({})

  async function buscar() {
    const resultado = await buscarUsuario(nomeUsuario)

    if (resultado) {
      setUsuario(resultado)
    } else {
      Alert.alert('Não foi possivel encontrar o usuário!')
    }
  }

  return (
    <ScrollView>
      <View style={estilos.container}>
        <>
          <View style={estilos.fundo} />
          <View style={estilos.imagemArea}>
            <Image
              source={{ uri: usuario.avatar_url }}
              style={estilos.imagem}
            />
          </View>
          <Text style={estilos.textoNome}>{usuario.name}</Text>
          <Text style={estilos.textoEmail}>{usuario.email}</Text>
          <View style={estilos.seguidoresArea}>
            <View style={estilos.seguidores}>
              <Text style={estilos.seguidoresNumero}>{usuario.followers}</Text>
              <Text style={estilos.seguidoresTexto}>Seguidores</Text>
            </View>
            <View style={estilos.seguidores}>
              <Text style={estilos.seguidoresNumero}>{usuario.following}</Text>
              <Text style={estilos.seguidoresTexto}>Seguindo</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Repositorios', { id: usuario.id })
            }
          >
            <Text style={estilos.repositorios}>Ver os repositórios</Text>
          </TouchableOpacity>
        </>

        <TextInput
          placeholder="Busque por um usuário"
          autoCapitalize="none"
          style={estilos.entrada}
          value={nomeUsuario}
          onChangeText={setNomeUsuario}
        />

        <TouchableOpacity onPress={buscar} style={estilos.botao}>
          <Text style={estilos.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
