import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
import Rating from '../components/Rating';
import moment from 'moment';
import 'moment/locale/pt-br';

export default class Educacao extends Component {

    constructor() {
        super();
        this.state = {
            cliente: '',
            posto: '',
            supervisor: '',
            data: moment().locale('pt-br').format('L'),
            educacao: [
                { "id": 1, "name": "Academia", "nota": 0 },
                { "id": 2, "name": "Área de Lazer - Pátios", "nota": 0 },
                { "id": 3, "name": "Banheiros - Limpeza / abastecimento", "nota": 0 },
                { "id": 4, "name": "Bebedouros", "nota": 0 },
                { "id": 5, "name": "Capachos", "nota": 0 },
                { "id": 6, "name": "Cestos de Lixo - comum / seletivo", "nota": 0 },
                { "id": 7, "name": "Cozinha", "nota": 0 },
                { "id": 8, "name": "D.M.L", "nota": 0 },
                { "id": 9, "name": "Elevadores", "nota": 0 },
                { "id": 10, "name": "Equipamentos de Incêndio", "nota": 0 },
                { "id": 11, "name": "Escadas", "nota": 0 },
                { "id": 12, "name": "Guarita", "nota": 0 },
                { "id": 13, "name": "Hall Social", "nota": 0 },
                { "id": 14, "name": "Janelas (face interna)", "nota": 0 },
                { "id": 15, "name": "Móveis", "nota": 0 },
                { "id": 16, "name": "Paredes", "nota": 0 },
                { "id": 17, "name": "Piscina", "nota": 0 },
                { "id": 18, "name": "Pisos", "nota": 0 },
                { "id": 19, "name": "Playground - Brinquedoteca", "nota": 0 },
                { "id": 20, "name": "Refeitório", "nota": 0 },
                { "id": 21, "name": "Sala de Aula", "nota": 0 },
                { "id": 22, "name": "Vestiários", "nota": 0 }
            ],
            educacao_equipe: [
                { "id": 23, "name": "Acessórios/ Equipamentos", "nota": 0 },
                { "id": 24, "name": "Crachá", "nota": 0 },
                { "id": 25, "name": "EPI's", "nota": 0 },
                { "id": 26, "name": "Produtos - Diluição", "nota": 0 },
                { "id": 27, "name": "Produtos - Gestão de Estoques", "nota": 0 },
                { "id": 28, "name": "Postura Profissional", "nota": 0 },
                { "id": 29, "name": "Qualidade Operacional", "nota": 0 },
                { "id": 30, "name": "Relacionamento / Cliente", "nota": 0 },
                { "id": 31, "name": "Uniformes", "nota": 0 }
            ]
        };
        this.salvarAuditoria = this.salvarAuditoria.bind(this);
    }

    salvarAuditoria() {
        if (this.state.cliente === '') {
            ToastAndroid.show('Campo Cliente Obrigatório!', ToastAndroid.LONG);
            return;
        }
        if (this.state.posto === '') {
            ToastAndroid.show('Campo Posto Obrigatório!', ToastAndroid.LONG);
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
                    <Text style={styles.text_field}>Cliente:</Text>
                    <TextInput style={{ height: 40 }} onChangeText={text => this.setState({ cliente: text })}></TextInput>
                </View>
                <View>
                    <Text style={styles.text_field}>Posto:</Text>
                    <TextInput style={{ height: 40 }} onChangeText={text => this.setState({ posto: text })}></TextInput>
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
                        data={this.state.educacao}
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
                        data={this.state.educacao_equipe}
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
