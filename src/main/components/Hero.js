import React from 'react';

import {
    View,
    Text,
    StyleSheet,

} from 'react-native';

import DeathRecovered from '../components/DataItems/deathrecovered'

function Hero ( props ) {
    return(
        <View style = {styles.container}>
            <Text style = { styles.date}>{props.summary.Date}</Text>
            <Text style = { styles.title}>Corona Virus Cases</Text>
            <Text style = { styles.total}>{props.global.TotalConfirmed}</Text>
            <DeathRecovered
            data={props.global}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        backgroundColor: "#ef564f",
        maxHeight: 200,
        marginBottom:80
    },
    date:{
        color:'white',
        fontSize: 15,
        paddingBottom:5
    },
    title:{
        color:'white',
        fontSize: 20,
        fontWeight:'700',
        paddingBottom:5
    },
    total:{
        color:'white',
        fontSize: 40,
        fontWeight:'bold'
    }
})

export default Hero;
