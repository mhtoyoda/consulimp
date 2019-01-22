import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './src/Home';
import Geral from './src/Geral';
import Educacao from './src/Educacao';
import Condominio from './src/Condominio';
import Saude from './src/Saude';
import Supervisores from './src/Supervisores';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home, navigationOptions: ({ navigation }) => ({
      title: 'Consulimp',
    }),
  },
  Geral: {
    screen: Geral, navigationOptions: ({ navigation }) => ({
      title: 'Auditoria de Processos - Geral',
    }),
  },
  Supervisores: {
    screen: Supervisores, navigationOptions: ({ navigation }) => ({
      title: 'Auditoria de Supervisores',
    }),
  },
  Educacao: {
    screen: Educacao, navigationOptions: ({ navigation }) => ({
      title: 'Auditoria de Processos - Educação',
    }),
  },
  Condominio: {
    screen: Condominio, navigationOptions: ({ navigation }) => ({
      title: 'Auditoria de Processos - Condomínios',
    }),
  },
  Saude: {
    screen: Saude, navigationOptions: ({ navigation }) => ({
      title: 'Auditoria de Processos - Saúde',
    }),
  },
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#00009C',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  });

export default createAppContainer(AppNavigator);