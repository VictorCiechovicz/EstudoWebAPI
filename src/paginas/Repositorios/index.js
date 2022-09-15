import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import estilos from './estilos';

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);


    async function buscarRepositorios(){
        const resultado= await buscarRepositorio()
    
    
        if(resultado){
          setData(resultado)
        }else{
            Alert.alert('Nenhum repositorio encontrado!')
    
        }
    }
    
    







    return (
        <View style={estilos.container}>
                <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
                <TouchableOpacity 
                    style={estilos.botao}
                    onPress={() => navigation.navigate('CriarRepositorio')}
                >
                    <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
                </TouchableOpacity>
        </View>
    );
}
