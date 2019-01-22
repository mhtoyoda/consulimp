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
                        <Text style={styles.textButton}>Auditoria Geral</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.props.navigation.navigate({ routeName: 'Condominio' })
                    }}>
                        <Text style={styles.textButton}>Auditoria Condomínio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.props.navigation.navigate({ routeName: 'Supervisores' })
                    }}>
                        <Text style={styles.textButton}>Auditoria Supervisores</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.props.navigation.navigate({ routeName: 'Saude' })
                    }}>
                        <Text style={styles.textButton}>Auditoria Saúde</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.props.navigation.navigate({ routeName: 'Educacao' })
                    }}>
                        <Text style={styles.textButton}>Auditoria Educação</Text>
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
        marginBottom: 10,
        borderRadius: 30,
    },
    textButton: {
        fontSize: 16,
        color: '#FFF'
    }
});