import React, { Component } from 'react';
import { connect } from 'react-redux';


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

import API from '../../utils/api';
import store from '../../stores/store'
import CountryDetail from './Countries/CountryDetail';




class Hero extends Component {

    state = {
        countryDataItem:[]
    }
    /*async componentDidMount(){
        const CountryName = this.props.country.name;
        const countryData = await API.getCountryAllStatus(CountryName);
        
        this.setState({
            countryDataItem: countryData
        })
        store.dispatch({
            type:'SET_COUNTRY',
            payload:{
                countryData
                
            }
        })
    }
*/
    closeCountry = () => {
        this.props.dispatch({
            type:'SET_SELECTED_COUNTRY',
            payload:{
                country:null
            }
        })
    }
    render(){
        return(
            <View backg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 roundColor="#FA5252">
            <StatusBar backgroundColor="#FA5252" barStyle="light-content"/>
            <Header>
            <TouchableOpacity
                onPress = { this.closeCountry}
            
            >
                <Image
                            source = { require('../../../assets/radar_white.png')}
                            style = { styles.radar}
                        />

            </TouchableOpacity>
            </Header>
            <CountryDetail data = {this.props.countryData}/>
            </View>
        )                                                                                                                                                                                                                                                                                                                                                                                                                                    

    }
}

const styles = StyleSheet.create({
    radar:{
        width:25,
        height:25,
        resizeMode:'contain'

    },

})

function mapStateToProps ( state ) {
    return{
        country: state.selectedCountry,
        countryData: state.countryData,
        
        
    }
}

export default connect(mapStateToProps)(Hero);
