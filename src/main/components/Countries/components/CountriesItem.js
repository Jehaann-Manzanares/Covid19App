import React from 'react';
import { Text,TouchableOpacity,View, StyleSheet,Image } from 'react-native';

function CountriesItem ( props ) {
    return(
        <TouchableOpacity>
            <View style = {styles.container}>
                <View style = {styles.country}>
                    <Image 
                    source = { { uri : props.flag} }
                    style = {styles.flag}
                    ></Image>
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