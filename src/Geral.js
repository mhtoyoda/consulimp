import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

export default class Geral extends Component {

    constructor() {
        super();
        this.state = {
            cliente: '',
            posto: '',
            supervisor: '',
            data: '',
            geral: [
                { "id": 1, "name": "Administração", "nota": 0 },
                { "id": 2, "name": "Ar Condicionado-Grelhas", "nota": 0 },
                { "id": 3, "name": "Banheiros – limpeza / abastecimento", "nota": 0 },
                { "id": 4, "name": "Bebedouros", "nota": 0 },
                { "id": 5, "name": "Capachos", "nota": 0 },
                { "id": 6, "name": "Carpetes", "nota": 0 },
                { "id": 7, "name": "Cestos de Lixo – comum / seletivo", "nota": 0 },
                { "id": 8, "name": "Copa", "nota": 0 },
                { "id": 9, "name": "D.M.L.", "nota": 0 },
                { "id": 10, "name": "Diretoria", "nota": 0 },
                { "id": 11, "name": "Divisórias", "nota": 0 },
                { "id": 12, "name": "Elevadores", "nota": 0 },
                { "id": 13, "name": "Equipamentos de Incêndio", "nota": 0 },
                { "id": 14, "name": "Escada", "nota": 0 },
                { "id": 15, "name": "Guarita", "nota": 0 },
                { "id": 15, "name": "Janelas (face interna)", "nota": 0 },
                { "id": 17, "name": "Luminárias", "nota": 0 },
                { "id": 18, "name": "Móveis Estofados", "nota": 0 },
                { "id": 19, "name": "Paredes", "nota": 0 },
                { "id": 20, "name": "Pisos", "nota": 0 },
                { "id": 21, "name": "Recepção", "nota": 0 },
                { "id": 22, "name": "Refeitório", "nota": 0 },
                { "id": 23, "name": "Vestiários", "nota": 0 }
            ],
            geral_equipe: [
                { "id": 1, "name": "Acessórios/ Equipamentos", "nota": 0 },
                { "id": 2, "name": "Crachá", "nota": 0 },
                { "id": 3, "name": "EPI's", "nota": 0 },
                { "id": 4, "name": "Postura Profissional", "nota": 0 },
                { "id": 5, "name": "Produtos - Diluição", "nota": 0 },
                { "id": 6, "name": "Produtos - Gestão de Estoques", "nota": 0 },
                { "id": 7, "name": "Qualidade Operacional", "nota": 0 },
                { "id": 8, "name": "Relacionamento / Cliente", "nota": 0 },
                { "id": 9, "name": "Uniformes", "nota": 0 }
            ]
        };
    }

    ratingCompleted(rating) {
        ToastAndroid.show(`Rating selecionado: ${rating}`, ToastAndroid.SHORT);
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
                    <TextInput style={{ height: 40 }} value={this.state.posto} onChangeText={(text) => this.setState({ posto: text })}></TextInput>
                </View>
                <View>
                    <Text style={styles.text_field}>Supervisor:</Text>
                    <TextInput style={{ height: 40 }} value={this.state.supervisor} onChangeText={(text) => this.setState({ supervisor: text })}></TextInput>
                </View>
                <View>
                    <Text style={styles.text_field}>Data:</Text>
                    <TextInput style={{ height: 40 }} value={this.state.data} onChangeText={(text) => this.setState({ data: text })}></TextInput>
                </View>
                <View>
                    <FlatList
                        keyExtractor={item => item.id.toString()}
                        data={this.state.geral}
                        renderItem={({ item, index }) =>
                            <View style={styles.item}>
                                <Text style={styles.text}>{item.name}</Text>
                                <AirbnbRating count={4} defaultRating={0} reviews={['Ruim', 'Regular', 'Bom', 'Ótimo']} size={25} onFinishRating={this.ratingCompleted}></AirbnbRating>
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
                        data={this.state.geral_equipe}
                        renderItem={({ item, index }) =>
                            <View style={styles.item}>
                                <Text style={styles.text}>{item.name}</Text>
                                <AirbnbRating count={4} defaultRating={0} reviews={['Ruim', 'Regular', 'Bom', 'Ótimo']} size={25}></AirbnbRating>
                            </View>
                        }
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => { console.warn(this.state) }}>
                        <Text>Salvar Auditoria</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >
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
        paddingTop: 15,
        marginBottom: 15,
        borderRadius: 30,
    },
    textButton: {
        fontSize: 16,
        color: '#FFF'
    }
});
