import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class Home extends Component {

    onLayout(e) {
        const { width, height } = Dimensions.get('window')
    }

    render() {
        return (
            <View style={styles.container} onLayout={this.onLayout.bind(this)}>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.props.navigation.navigate({ routeName: 'Geral' })
                    }}>
                        <Text style={styles.textButton}>Auditoria de Processos - Geral</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.props.navigation.navigate({ routeName: 'Condominio' })
                    }}>
                        <Text style={styles.textButton}>Auditoria de Processos - Condomínios</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.props.navigation.navigate({ routeName: 'Supervisores' })
                    }}>
                        <Text style={styles.textButton}>Auditoria de Supervisores</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.props.navigation.navigate({ routeName: 'Saude' })
                    }}>
                        <Text style={styles.textButton}>Auditoria de Processos - Saúde</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.props.navigation.navigate({ routeName: 'Educacao' })
                    }}>
                        <Text style={styles.textButton}>Auditoria de Processos - Educação</Text>
                    </TouchableOpacity>
                </View >
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#00009C',
        padding: 10,
        marginBottom: 15,
        borderRadius: 30,
    },
    textButton: {
        fontSize: 16,
        color: '#FFF'
    }
});