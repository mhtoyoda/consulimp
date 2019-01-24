import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, FlatList } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

const saude = [
    { "id": 1, "name": "Administração", "nota": 0 },
    { "id": 2, "name": "Área Interna", "nota": 0 },
	{ "id": 3, "name": "Área Externa", "nota": 0 },
    { "id": 4, "name": "Banheiros - limpeza / abastecimento", "nota": 0 },
    { "id": 5, "name": "Berçário", "nota": 0 },
    { "id": 6, "name": "C.M.E", "nota": 0 },
    { "id": 7, "name": "Centro Cirúrgico", "nota": 0 },
    { "id": 8, "name": "Centro Obstétrico", "nota": 0 },
    { "id": 9, "name": "Cestos de Lixo", "nota": 0 },   
    { "id": 10, "name": "Consultórios", "nota": 0 },
    { "id": 11, "name": "D.M.L", "nota": 0 },
    { "id": 12, "name": "Enfermarias", "nota": 0 },
    { "id": 13, "name": "Equipamentos de Incêndio", "nota": 0 },
    { "id": 14, "name": "Expurgo", "nota": 0 },
    { "id": 15, "name": "Farmácia", "nota": 0 },
    { "id": 16, "name": "Janelas", "nota": 0 },
    { "id": 17, "name": "Limpeza Concorrente", "nota": 0 },
    { "id": 18, "name": "Limpeza Terminal", "nota": 0 },
    { "id": 19, "name": "Necrotério", "nota": 0 },
    { "id": 20, "name": "Paredes", "nota": 0 },
    { "id": 21, "name": "Pisos", "nota": 0 },    
    { "id": 22, "name": "Postos Enfermagem", "nota": 0 },
	{ "id": 23, "name": "Pronto Atendimento", "nota": 0 },
	{ "id": 24, "name": "Quartos", "nota": 0 },
	{ "id": 25, "name": "UTI - Adulto", "nota": 0 },
	{ "id": 26, "name": "UTI - NEO", "nota": 0 }
]

const saude_equipe = [
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

const Saude = () => (
    <ScrollView>
        <View>
            <Text style={styles.text_field}>Cliente:</Text>
            <TextInput style={{ height: 40 }}></TextInput>
        </View>
        <View>
            <Text style={styles.text_field}>Posto:</Text>
            <TextInput style={{ height: 40 }}></TextInput>
        </View>
        <View>
            <Text style={styles.text_field}>Supervisor:</Text>
            <TextInput style={{ height: 40 }}></TextInput>
        </View>
        <View>
            <Text style={styles.text_field}>Data:</Text>
            <TextInput style={{ height: 40 }}></TextInput>
        </View>
        <View>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={saude}
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
                data={saude_equipe}
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
export default Saude;
