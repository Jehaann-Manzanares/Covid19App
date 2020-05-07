import React from 'react';
import { Text,TouchableOpacity,View, StyleSheet,Image } from 'react-native';
import { SvgUri } from 'react-native-svg';

function CountriesItem ( props ) {
    return(
        <TouchableOpacity>
            <View style = {styles.container}>
                <View style = {styles.country}>
                    <SvgUri 
                    width="100%"
                    height="100%"
                    uri = {props.flag}
                    style = {styles.flag}
                    ></SvgUri>
                    <Text style = { styles.pais}>{props.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        
        
    },
    country:{
        flexDirection:'row',
        padding:20,
        
        
       
    },
    flag:{
        width:20,
        height:20,
        marginRight:15
    },
    pais:{
        fontSize:15,
        color:'black',
        fontWeight:'600'
    }
})

export default CountriesItem;