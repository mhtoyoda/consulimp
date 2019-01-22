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
      title: 'Auditoria Geral',
    }),
  },
  Supervisores: {
    screen: Supervisores, navigationOptions: ({ navigation }) => ({
      title: 'Auditoria Supervisores',
    }),
  },
  Educacao: {
    screen: Educacao, navigationOptions: ({ navigation }) => ({
      title: 'Auditoria Educação',
    }),
  },
  Condominio: {
    screen: Condominio, navigationOptions: ({ navigation }) => ({
      title: 'Auditoria Condomínio',
    }),
  },
  Saude: {
    screen: Saude, navigationOptions: ({ navigation }) => ({
      title: 'Auditoria Saúde',
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