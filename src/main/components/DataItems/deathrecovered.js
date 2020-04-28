import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    ImageBackground,
    
} from 'react-native';

function DeathRecovered ( props ) {
    return (
        
        <View style= {styles.container}>
            <View style= {styles.item}>
                <Text style= {styles.title}>Death</Text>
                <Text style= {styles.total}>{props.data.TotalDeaths}</Text>
                <ImageBackground
                source = { require('../../../../assets/red_graphic.png')}
                style= {styles.img} />
            </View>
            <View style= {styles.item}>
                <Text style= {styles.title}>Recovered</Text>
                <Text style= {styles.totalGreen}>{props.data.TotalRecovered}</Text>
                <ImageBackground
                source = { require('../../../../assets/Green_graphic.png')}
                style= {styles.img} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        paddingHorizontal:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
   
    },
    item:{
        backgroundColor:'white',
        padding:10,
        borderRadius: 5,
        height:170,
        
        
        
        
    },
    title:{
        color:'#909090',
        fontSize:12,
        textTransform:'uppercase',
        marginTop:10
        
    },
    total:{
        color:'#ef5550',
        fontSize:35,
        fontWeight:'bold',
        marginBottom:5
    },
    totalGreen:{
        color:'#5db882',
        fontSize:35,
        fontWeight:'bold',
        marginBottom:5
    },
    img:{
        width:'auto',
        height: 60,
        //resizeMode:'center'
        //overflow:'visible'

    }
})
export default DeathRecovered;