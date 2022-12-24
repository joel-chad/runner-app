import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
const {width, height}= Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        width
    },
    title:{
        fontSize: 80,
        fontFamily: 'QuickSans-Bold'
    }
})

export const Slide = ({label, right}) => {
    console.log(label)
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {label}
            </Text>
        </View>
    )
}