import React, { Component } from 'react';

import CountriesLayout from '../../components/Countries/components/countries_layout';
import Header from '../../components/header';
import Searcher from '../../components/searcher' 
import CountriesItem from '../../components/Countries/components/CountriesItem'
import Separator from '../../components/Separator'

import {
    Text,
    FlatList
} from 'react-native'
class Countries extends Component {

    ItemSeparator = () => <Separator/> 
   renderItem = ( {item} ) => {
       return (
           <CountriesItem
           {
               ...item
           }
           />
       )
   }
    render(){

        DATA = [
            {
                id:1,
                name:'nicaragua'
            },
            {
                id:2,
                name:'Costa Rica'
            },
            {
                id:3,
                name:'Costa Rica'
            }

        ]
        return(
            <CountriesLayout>
                <Header></Header>
                <Searcher/>
                <FlatList
                    data = { this.props.countriesAndFlags }
                    renderItem = {this.renderItem}
                    ItemSeparatorComponent = {this.ItemSeparator}
                >

                </FlatList>
            </CountriesLayout>
        )
    }
}

export default Countries;