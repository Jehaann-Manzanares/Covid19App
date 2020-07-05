import React from 'react';

import { useDispatch } from 'react-redux'


import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    StatusBar,
    TouchableOpacity


} from 'react-native';

import Header from '../components/header';
import CountryDetail from './Countries/CountryDetail';




function Hero () {

    const dispatch = useDispatch()
    const closeCountry = () => {
        dispatch({
            type:'SET_SELECTED_COUNTRY',
            payload:{
                country:null
            }
        })
    }

        return(
            <View backgroundColor="#FA5252">
            <StatusBar backgroundColor="#FA5252" barStyle="light-content"/>
            <Header>
            <TouchableOpacity
                onPress = { closeCountry}
            
            >
                <Image
                            source = { require('../../../assets/radar_white.png')}
                            style = { styles.radar}
                        />

            </TouchableOpacity>
            </Header>
            <CountryDetail/>
            </View>
        )

    
}

const styles = StyleSheet.create({
    radar:{
        width:25,
        height:25,
        resizeMode:'contain'

    },

})



export default Hero;
