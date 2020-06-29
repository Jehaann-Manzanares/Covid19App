import React, { Component } from 'react';

import Home from '../../screen/container/home';
import Hero from '../Hero';
import ListCountries from '../../screen/container/Countries'

import { connect } from 'react-redux';
import store from '../../../stores/store'

import API from '../../../utils/api'

class AppLayout extends Component {
    state = {
        summaryItem:[],
        GlobalItem:[],
        CountriesItem:[],
        CountriesAndFlagsItem:[]
    }
       
    async componentDidMount(){
        /*const summary = await API.getSummary()
        this.setState({
            summaryItem:summary
        })
        store.dispatch({
            type:'SET_SUMMARY',
            payload:{
                summary
            }
        })
        const Global = await API.getGlobal()
        /*this.setState({
            GlobalItem:Global
        })
        store.dispatch({
            type:'SET_GLOBAL',
            payload:{
                Global
            }
        })*/
        const CountriesAndFlags = await API.getCountriesNameandFlag();
        /*this.setState({
            CountriesAndFlagsItem:CountriesAndFlags
        })*/
        store.dispatch({
            type:'SET_COUNTRIES_FLAG',
            payload:{
                CountriesAndFlags
            }
        })
        const { name } = this.props.selectedCountry;
        const countryData = await API.getCountryAllStatus('nicaragua');
        store.dispatch({
            type:'SET_COUNTRY',
            payload:{
                countryData
                
                
            }
        })
        console.log(name)
        
    }

    

    render(){
  
            if ( this.props.selectedCountry) {
                return (
                    <Home>
                        <Hero/>
                     </Home>
                )

            }

            return(
                <ListCountries/>
            )
    }
}
function mapStateToProps ( state ) {
    return{
        selectedCountry: state.selectedCountry,
    }
}

export default connect(mapStateToProps)(AppLayout);