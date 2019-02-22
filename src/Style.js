import { StyleSheet } from 'react-native';

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

export default styles;