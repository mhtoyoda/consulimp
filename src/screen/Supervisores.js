import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
import Rating from '../components/Rating';
import moment from 'moment';
import 'moment/locale/pt-br';

export default class Supervisores extends Component {

    constructor() {
        super();
        this.state = {
            empresa: '',
            supervisor: '',
            data: moment().locale('pt-br').format('L'),
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
        };
        this.salvarAuditoria = this.salvarAuditoria.bind(this);
    }

    salvarAuditoria() {
        if (this.state.empresa === '') {
            ToastAndroid.show('Campo Empresa Obrigatório!', ToastAndroid.LONG);
            return;
        }
        if (this.state.supervisor === '') {
            ToastAndroid.show('Campo Supervisor Obrigatório!', ToastAndroid.LONG);
            return;
        }
        console.warn(this.state);
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
                    <TextInput style={{ height: 40 }} value={this.state.data} editable={false}></TextInput>
                </View>
                <View>
                    <FlatList
                        keyExtractor={item => item.id.toString()}
                        data={this.state.supervisores_conhecimentos}
                        extraData={this.state}
                        renderItem={({ item }) =>
                            <Rating name={item.name} nota={item.nota} onFinishRating={(rating) => item.nota = rating}></Rating>
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
                        extraData={this.state}
                        renderItem={({ item }) =>
                            <Rating name={item.name} nota={item.nota} onFinishRating={(rating) => item.nota = rating}></Rating>
                        }
                    />
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} onPress={this.salvarAuditoria}>
                        <Text style={styles.textButton}>Salvar Auditoria</Text>
                    </TouchableOpacity>
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
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#00009C',
        padding: 10,
        borderRadius: 30,
    },
    textButton: {
        fontSize: 16,
        color: '#FFF'
    },
    containerButton: {
        paddingTop: 20,
        paddingBottom: 20,
    }
});
