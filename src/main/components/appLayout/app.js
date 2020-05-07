import React, { Component } from 'react';

import {
 StatusBar,
 ScrollView,
 View
} from 'react-native';

import Home from '../../screen/container/home';
import Header from '../../components/header';
import DataItems from '../DataItems/data-items';
import Hero from '../Hero';
import Countries from '../../screen/container/Countries'

import API from '../../../utils/api'

class AppLayout extends Component {
    state = {
        summaryItem:[],
        GlobalItem:[],
        CountriesItem:[],
        CountriesAndFlagsItem:[]
    }
       
    async componentDidMount(){
        const summary = await API.getSummary()
        this.setState({
            summaryItem:summary
        })

        const Global = await API.getGlobal()
        this.setState({
            GlobalItem:Global
        })

        const Countries = await API.getCountries()
        this.setState({
            CountriesItem:Countries
        })

        const CountriesAndFlags = await API.getCountriesNameandFlag();
        this.setState({
            CountriesAndFlagsItem:CountriesAndFlags
        })

    }

    render(){
        return(
            <View>
                <StatusBar backgroundColor="#ef564f" barStyle="light-content"/>
                <Countries
                countriesAndFlags = {this.state.CountriesAndFlagsItem}
                />
                <Home>
                    <StatusBar backgroundColor="#ef564f" barStyle="light-content"/>
                    <Header/>
                    <Hero
                     summary = {this.state.summaryItem}
                     global = {this.state.GlobalItem}
                    />
                    <DataItems 
                    countries = {this.state.CountriesItem}
                    />   
                </Home>
            </View>
                

        )
    }
}

export default AppLayout;