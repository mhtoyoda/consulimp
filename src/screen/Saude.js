import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
import Rating from '../components/Rating';
import moment from 'moment';
import 'moment/locale/pt-br';
import XLSX from 'xlsx';
import File from '../function/File';
import Calculo from '../function/Calculo';

export default class Saude extends Component {

    constructor() {
        super();
        this.state = {
            cliente: '',
            posto: '',
            supervisor: '',
            data: moment().locale('pt-br').format('L'),
            saude: [
                { "Id": 1, "Item": "Administração", "Nota": 0 },
                { "Id": 2, "Item": "Área Interna", "Nota": 0 },
                { "Id": 3, "Item": "Área Externa", "Nota": 0 },
                { "Id": 4, "Item": "Banheiros - limpeza / abastecimento", "Nota": 0 },
                { "Id": 5, "Item": "Berçário", "Nota": 0 },
                { "Id": 6, "Item": "C.M.E", "Nota": 0 },
                { "Id": 7, "Item": "Centro Cirúrgico", "Nota": 0 },
                { "Id": 8, "Item": "Centro Obstétrico", "Nota": 0 },
                { "Id": 9, "Item": "Cestos de Lixo", "Nota": 0 },
                { "Id": 10, "Item": "Consultórios", "Nota": 0 },
                { "Id": 11, "Item": "D.M.L", "Nota": 0 },
                { "Id": 12, "Item": "Enfermarias", "Nota": 0 },
                { "Id": 13, "Item": "Equipamentos de Incêndio", "Nota": 0 },
                { "Id": 14, "Item": "Expurgo", "Nota": 0 },
                { "Id": 15, "Item": "Farmácia", "Nota": 0 },
                { "Id": 16, "Item": "Janelas", "Nota": 0 },
                { "Id": 17, "Item": "Limpeza Concorrente", "Nota": 0 },
                { "Id": 18, "Item": "Limpeza Terminal", "Nota": 0 },
                { "Id": 19, "Item": "Necrotério", "Nota": 0 },
                { "Id": 20, "Item": "Paredes", "Nota": 0 },
                { "Id": 21, "Item": "Pisos", "Nota": 0 },
                { "Id": 22, "Item": "Postos Enfermagem", "Nota": 0 },
                { "Id": 23, "Item": "Pronto Atendimento", "Nota": 0 },
                { "Id": 24, "Item": "Quartos", "Nota": 0 },
                { "Id": 25, "Item": "UTI - Adulto", "Nota": 0 },
                { "Id": 26, "Item": "UTI - NEO", "Nota": 0 }
            ],
            saude_equipe: [
                { "Id": 27, "Item": "Acessórios/ Equipamentos", "Nota": 0 },
                { "Id": 28, "Item": "Crachá", "Nota": 0 },
                { "Id": 29, "Item": "EPI's", "Nota": 0 },
                { "Id": 30, "Item": "Postura Profissional", "Nota": 0 },
                { "Id": 31, "Item": "Produtos - Diluição", "Nota": 0 },
                { "Id": 32, "Item": "Produtos - Gestão de Estoques", "Nota": 0 },
                { "Id": 33, "Item": "Qualidade Operacional", "Nota": 0 },
                { "Id": 34, "Item": "Relacionamento / Cliente", "Nota": 0 },
                { "Id": 35, "Item": "Uniformes", "Nota": 0 }
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

        this.exportFile();
    }

    exportFile = () => {
        const cliente = this.state.cliente;
        const posto = this.state.posto;
        const supervisor = this.state.supervisor;
        const data = moment().locale('pt-br').format('DDMMYYYY');
        
        var ws = XLSX.utils.aoa_to_sheet([
            ["Cliente", `${cliente}`],
            ["Posto", `${posto}`],
            ["Supervisor", `${supervisor}`],
            ["Data", `${data.substring(0,2)}/${data.substring(2,4)}/${data.substring(4,8)}`]
        ]);

        var list = this.state.saude.concat(this.state.saude_equipe);
        var qtde = 0;
        var avaliacoes = Calculo.generateList(list);        
        avaliacoes = Calculo.completeList(avaliacoes);
        var averageAvaliation = Calculo.sumaryList(avaliacoes);
        list = Calculo.formatNota(list);

        /* this array controls the column order in the generated sheet */
        var header = ["Id", "Item", "Nota"];

        /* add row objects to sheet starting from cell A6 */
        XLSX.utils.sheet_add_json(ws, list, { header: header, origin: "A6" });

        var headerAvaliacao = ["Item", "Quantidade", "Ponto"];
        XLSX.utils.sheet_add_json(ws, avaliacoes, { header: headerAvaliacao, origin: "A43" });
        XLSX.utils.sheet_add_aoa(ws, [['Média'], [averageAvaliation]], {origin: "D43"})        

        /* build new workbook */
        const wb = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(wb, ws, "Saúde");

        /* write file */
        const wbout = XLSX.write(wb, { type: 'binary', bookType: "xlsx" });
        const fileName = File.getPath() + `${cliente}_${data}_`;
        const file = `${fileName}` + "Saude.xlsx";

        File.generateFile(file, wbout);
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
                        data={this.state.saude}
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
                        data={this.state.saude_equipe}
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

