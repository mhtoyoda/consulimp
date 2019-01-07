import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, FlatList } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

const categorias = [
  { id: 1, name: 'Administração', nota: 0 },
  { id: 2, name: 'Ar Condicionado-Grelhas', nota: 0 },
  { id: 3, name: 'Banheiros – limpeza / abastecimento', nota: 0 },
  { id: 4, name: 'Bebedouros', nota: 0 },
  { id: 5, name: 'Capachos', nota: 0 },
  { id: 6, name: 'Carpetes', nota: 0 },
  { id: 7, name: 'Cestos de Lixo – comum / seletivo', nota: 0 },
  { id: 8, name: 'Copa', nota: 0 },
  { id: 9, name: 'D.M.L.', nota: 0 },
  { id: 10, name: 'Diretoria', nota: 0 },
  { id: 11, name: 'Divisórias', nota: 0 },
  { id: 12, name: 'Elevadores', nota: 0 },
  { id: 13, name: 'Equipamentos de Incêndio', nota: 0 },
  { id: 14, name: 'Escada', nota: 0 },
  { id: 15, name: 'Guarita', nota: 0 },
  { id: 15, name: 'Janelas (face interna)', nota: 0 },
  { id: 17, name: 'Luminárias', nota: 0 },
  { id: 18, name: 'Móveis Estofados', nota: 0 },
  { id: 19, name: 'Paredes', nota: 0 },
  { id: 20, name: 'Pisos', nota: 0 },
  { id: 21, name: 'Recepção', nota: 0 },
  { id: 22, name: 'Refeitório', nota: 0 },
  { id: 23, name: 'Vestiários', nota: 0 }
]

export const estilo = StyleSheet.create({
  item: {
    height: 80,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderColor: '#222',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  title : {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    padding: 15,
  }
})

export const Categoria = props =>
  <View style={estilo.item}>
    <Text style={estilo.text}>{props.name}</Text>
    <AirbnbRating count={4} defaultRating={0} reviews={['Péssimo', 'Regular', 'Bom', 'Excelente']} size={30}></AirbnbRating>
  </View>

export default props => {
  state = {
    cliente: 'Hospital',
    posto: 'Unidade Centro',
    supervisor: 'Marcelo',
    date: '08/01/2018'
  }

  const renderItems = ({ item }) => {
    return <Categoria {...item} />
  }

  return (
    <ScrollView>
      <View>
        <Text style={estilo.title}>AUDITORIA DE PROCESSOS - GERAL</Text>
      </View>
      <View>
        <Text>Cliente:</Text>
        <TextInput style={{ height: 40 }} value={state.cliente}></TextInput>
      </View>
      <View>
        <Text>Posto:</Text>
        <TextInput style={{ height: 40 }} value={state.posto}></TextInput>
      </View>
      <View>
        <Text>Supervisor:</Text>
        <TextInput style={{ height: 40 }} value={state.supervisor}></TextInput>
      </View>
      <View>
        <Text>Data:</Text>
        <TextInput style={{ height: 40 }} value={state.date}></TextInput>
      </View>
      <FlatList data={categorias} renderItem={renderItems} keyExtractor={(_, index) => index.toString()} />
    </ScrollView>
  )
}