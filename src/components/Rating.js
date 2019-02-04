import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

export default props => {
    return (
        <View style={styles.item}>            
            <Text style={styles.text}>{props.name}</Text>
            <AirbnbRating count={4} defaultRating={0} reviews={['Ruim', 'Regular', 'Bom', 'Ótimo']} size={25} value={props.nota} onFinishRating={props.onFinishRating}></AirbnbRating>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        height: 75,
        paddingHorizontal: 15,        
        borderWidth: 0.7,
        borderColor: '#222',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold',
    },
});
