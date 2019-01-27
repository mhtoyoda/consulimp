import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, FlatList } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

export default class Supervisores extends Component {

    constructor() {
        super();
        this.state = {
            empresa: '',
            supervisor: '',
            data: '',
            supervisores_conhecimentos: [
                { "id": 1, "name": "Desinfecção e Descontaminação de WC", "nota": 0 },
                { "id": 2, "name": "EPI's - uso e normas legais", "nota": 0 },
                { "id": 3, "name": "Equipamentos / Acessórios", "nota": 0 },
                { "id": 4, "name": "Limpeza Geral", "nota": 0 },
                { "id": 5, "name": "Limpeza Vidros", "nota": 0 },
                { "id": 6, "name": "Métodos e Processos Operacionais", "nota": 0 },
                { "id": 7, "name": "Produtos e Diluições", "nota": 0 },
                { "id": 8, "name": "Tratamento de Pisos", "nota": 0 },
                { "id": 9, "name": "Uniformes - uso e conservação", "nota": 0 }
            ],
            supervisores_atendimento: [
                { "id": 1, "name": "Atendimento a solicitações dos colaboradores", "nota": 0 },
                { "id": 2, "name": "Condução dos processos", "nota": 0 },
                { "id": 3, "name": "Conhecimento posto - cronogramsssa e pop", "nota": 0 },
                { "id": 4, "name": "Fiscalização efetiva geral", "nota": 0 },
                { "id": 5, "name": "Habilidade de comunicação", "nota": 0 },
                { "id": 6, "name": "Implantação de processos de melhorias", "nota": 0 },
                { "id": 7, "name": "Motivação da equipe", "nota": 0 },
                { "id": 8, "name": "Organização das tarefas - outros departamentos", "nota": 0 },
                { "id": 9, "name": "Preparação das rotinas", "nota": 0 },
                { "id": 10, "name": "Qualidade operacional", "nota": 0 },
                { "id": 11, "name": "Relacionamento com clientes", "nota": 0 },
                { "id": 12, "name": "S.L.A Cumprimento e Normativas", "nota": 0 }
            ]
        }
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={styles.text_field}>Empresa:</Text>
                    <TextInput style={{ height: 40 }} onChangeText={text => this.setState({ empresa: text })}></TextInput>
                </View>
                <View>
                    <Text style={styles.text_field}>Supervisor:</Text>
                    <TextInput style={{ height: 40 }} onChangeText={text => this.setState({ supervisor: text })}></TextInput>
                </View>
                <View>
                    <Text style={styles.text_field}>Data:</Text>
                    <TextInput style={{ height: 40 }} onChangeText={text => this.setState({ data: text })}></TextInput>
                </View>
                <View>
                    <FlatList
                        keyExtractor={item => item.id.toString()}
                        data={this.state.supervisores_conhecimentos}
                        renderItem={({ item }) =>
                            <View style={styles.item}>
                                <Text style={styles.text}>{item.name}</Text>
                                <AirbnbRating count={4} defaultRating={0} reviews={['Ruim', 'Regular', 'Bom', 'Ótimo']} size={25}></AirbnbRating>
                            </View>
                        }
                    />
                </View>
                <View>
                    <Text style={styles.text_equipe}>Equipe</Text>
                </View>
                <View>
                    <FlatList
                        keyExtractor={item => item.id.toString()}
                        data={this.state.supervisores_atendimento}
                        renderItem={({ item }) =>
                            <View style={styles.item}>
                                <Text style={styles.text}>{item.name}</Text>
                                <AirbnbRating count={4} defaultRating={0} reviews={['Ruim', 'Regular', 'Bom', 'Ótimo']} size={25}></AirbnbRating>
                            </View>
                        }
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        height: 70,
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
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        padding: 15,
    },
    text_equipe: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text_field: {
        fontWeight: 'bold',
        marginTop: 5,
    }
});