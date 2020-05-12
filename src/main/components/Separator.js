import React from 'react';
import { View, StyleSheet } from 'react-native';


function Separator ( props ) {
    return(
        <View style={ styles.container}>
            <View style={ styles.border}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        backgroundColor:'white'
    },
    border:{
        
        borderTopWidth:1,
        borderColor:'#707070'
        
    }
})

export default Separator;