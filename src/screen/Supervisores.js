import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
import Rating from '../components/Rating';
import moment from 'moment';
import 'moment/locale/pt-br';
import XLSX from 'xlsx';
import File from '../function/File';
import Calculo from '../function/Calculo';

export default class Supervisores extends Component {

    constructor() {
        super();
        this.state = {
            empresa: '',
            supervisor: '',
            data: moment().locale('pt-br').format('L'),
            supervisores_conhecimentos: [
                { "Id": 1, "Item": "Desinfecção e Descontaminação de WC", "Nota": 0 },
                { "Id": 2, "Item": "EPI's - uso e normas legais", "Nota": 0 },
                { "Id": 3, "Item": "Equipamentos / Acessórios", "Nota": 0 },
                { "Id": 4, "Item": "Limpeza Geral", "Nota": 0 },
                { "Id": 5, "Item": "Limpeza Vidros", "Nota": 0 },
                { "Id": 6, "Item": "Métodos e Processos Operacionais", "Nota": 0 },
                { "Id": 7, "Item": "Produtos e Diluições", "Nota": 0 },
                { "Id": 8, "Item": "Tratamento de Pisos", "Nota": 0 },
                { "Id": 9, "Item": "Uniformes - uso e conservação", "Nota": 0 }
            ],
            supervisores_atendimento: [
                { "Id": 10, "Item": "Atendimento a solicitações dos colaboradores", "Nota": 0 },
                { "Id": 11, "Item": "Condução dos processos", "Nota": 0 },
                { "Id": 12, "Item": "Conhecimento posto - cronogramsssa e pop", "Nota": 0 },
                { "Id": 13, "Item": "Fiscalização efetiva geral", "Nota": 0 },
                { "Id": 14, "Item": "Habilidade de comunicação", "Nota": 0 },
                { "Id": 15, "Item": "Implantação de processos de melhorias", "Nota": 0 },
                { "Id": 16, "Item": "Motivação da equipe", "Nota": 0 },
                { "Id": 17, "Item": "Organização das tarefas - outros departamentos", "Nota": 0 },
                { "Id": 18, "Item": "Preparação das rotinas", "Nota": 0 },
                { "Id": 19, "Item": "Qualidade operacional", "Nota": 0 },
                { "Id": 20, "Item": "Relacionamento com clientes", "Nota": 0 },
                { "Id": 21, "Item": "S.L.A Cumprimento e Normativas", "Nota": 0 }
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
        this.exportFile();
    }

    exportFile = () => {
        const empresa = this.state.empresa;
        const supervisor = this.state.supervisor;
        const data = moment().locale('pt-br').format('DDMMYYYY');
        
        var ws = XLSX.utils.aoa_to_sheet([
            ["Empresa", `${empresa}`],
            ["Supervisor", `${supervisor}`],
            ["Data", `${data.substring(0,2)}/${data.substring(2,4)}/${data.substring(4,8)}`]
        ], {cellStyles: true});

        var list = this.state.supervisores_conhecimentos.concat(this.state.supervisores_atendimento);
        var qtde = 0;
        var avaliacoes = Calculo.generateList(list);
        avaliacoes = Calculo.completeList(avaliacoes);
        var averageAvaliation = Calculo.sumaryList(avaliacoes);
        list = Calculo.formatNota(list);

        /* this array controls the column order in the generated sheet */
        var header = ["Id", "Item", "Nota"];

        /* add row objects to sheet starting from cell A6 */
        XLSX.utils.sheet_add_json(ws, list, { header: header, origin: "A5" });
        ws['!merges'] = [ XLSX.utils.decode_range("D29:D33") ];

        var headerAvaliacao = ["Item", "Quantidade", "Ponto"];
        XLSX.utils.sheet_add_json(ws, avaliacoes, { header: headerAvaliacao, origin: "A28" });
        XLSX.utils.sheet_add_aoa(ws, [['Média'], [averageAvaliation]], {origin: "D28"})        

        /* build new workbook */
        const wb = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(wb, ws, "Supervisores");

        /* write file */
        const wbout = XLSX.write(wb, { type: 'binary', bookType: "xlsx" });
        const fileName = File.getPath() + `${empresa}_${data}_`;
        const file = `${fileName}` + "Supervisores.xlsx";

        File.generateFile(file, wbout);
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
                        keyExtractor={item => item.Id.toString()}
                        data={this.state.supervisores_conhecimentos}
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
                        data={this.state.supervisores_atendimento}
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
