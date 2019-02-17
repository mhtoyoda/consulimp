import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, FlatList, TouchableOpacity, ToastAndroId } from 'react-native';
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
                { "Id": 1, "Item": "Academia", "Nota": 0 },
                { "Id": 2, "Item": "Área de Lazer - Pátios", "Nota": 0 },
                { "Id": 3, "Item": "Banheiros - Limpeza / abastecimento", "Nota": 0 },
                { "Id": 4, "Item": "Bebedouros", "Nota": 0 },
                { "Id": 5, "Item": "Capachos", "Nota": 0 },
                { "Id": 6, "Item": "Cestos de Lixo - comum / seletivo", "Nota": 0 },
                { "Id": 7, "Item": "Cozinha", "Nota": 0 },
                { "Id": 8, "Item": "D.M.L", "Nota": 0 },
                { "Id": 9, "Item": "Elevadores", "Nota": 0 },
                { "Id": 10, "Item": "Equipamentos de Incêndio", "Nota": 0 },
                { "Id": 11, "Item": "Escadas", "Nota": 0 },
                { "Id": 12, "Item": "Guarita", "Nota": 0 },
                { "Id": 13, "Item": "Hall Social", "Nota": 0 },
                { "Id": 14, "Item": "Janelas (face interna)", "Nota": 0 },
                { "Id": 15, "Item": "Móveis", "Nota": 0 },
                { "Id": 16, "Item": "Paredes", "Nota": 0 },
                { "Id": 17, "Item": "Piscina", "Nota": 0 },
                { "Id": 18, "Item": "Pisos", "Nota": 0 },
                { "Id": 19, "Item": "Playground - Brinquedoteca", "Nota": 0 },
                { "Id": 20, "Item": "Refeitório", "Nota": 0 },
                { "Id": 21, "Item": "Sala de Aula", "Nota": 0 },
                { "Id": 22, "Item": "Vestiários", "Nota": 0 }
            ],
            educacao_equipe: [
                { "Id": 23, "Item": "Acessórios/ Equipamentos", "Nota": 0 },
                { "Id": 24, "Item": "Crachá", "Nota": 0 },
                { "Id": 25, "Item": "EPI's", "Nota": 0 },
                { "Id": 26, "Item": "Produtos - Diluição", "Nota": 0 },
                { "Id": 27, "Item": "Produtos - Gestão de Estoques", "Nota": 0 },
                { "Id": 28, "Item": "Postura Profissional", "Nota": 0 },
                { "Id": 29, "Item": "Qualidade Operacional", "Nota": 0 },
                { "Id": 30, "Item": "Relacionamento / Cliente", "Nota": 0 },
                { "Id": 31, "Item": "Uniformes", "Nota": 0 }
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
                        keyExtractor={item => item.Id.toString()}
                        data={this.state.educacao}
                        extraData={this.state}
                        renderItem={({ item }) =>
                            <Rating name={item.Item} nota={item.Nota} onFinishRating={(rating) => item.Nota = rating}></Rating>
                        }
                    />
                </View>
                <View>
                    <Text style={styles.text_equipe}>Equipe</Text>
                </View>
                <View>
                    <FlatList
                        keyExtractor={item => item.Id.toString()}
                        data={this.state.educacao_equipe}
                        extraData={this.state}
                        renderItem={({ item }) =>
                            <Rating name={item.Item} nota={item.Nota} onFinishRating={(rating) => item.Nota = rating}></Rating>
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

