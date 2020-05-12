import React from 'react';
import { Text,TouchableOpacity,View, StyleSheet,Image, _View } from 'react-native';
import { SvgCssUri } from 'react-native-svg';

function CountriesItem ( props ) {
    return(
        <TouchableOpacity
        onPress = {props.onPress}
        >
            <View style = {styles.container}>
                <View style = {styles.country}>
                    
                    <View style = {styles.flag}>
                        <SvgCssUri 
                        width="100%"
                        height="100%"
                        uri = {props.flag}
                        
                        />
                    </View>
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
        alignItems:'center',
         
    },
    flag:{
        width:31,
        height:31,
        marginRight:15,
        
        
    },
    pais:{
        fontSize:15,
        color:'black',
        fontWeight:'600'
    }
})

export default CountriesItem;