import React, { Component } from 'react';

import CountriesLayout from '../../components/Countries/components/countries_layout';
import Header from '../../components/header';
import Searcher from '../../components/searcher' 
import CountriesItem from '../../components/Countries/components/CountriesItem'
import Separator from '../../components/Separator'

import {
    Image,
    FlatList
} from 'react-native'

import { connect } from "react-redux";

function mapStateToProps ( state ) {
    return {
        countriesAndFlags: state.CountriesAndFlags
    }
}
class Countries extends Component {

   ItemSeparator = () => <Separator/> 

   viewCountry = ( item ) =>{
    this.props.dispatch({
        type: 'SET_SELECTED_COUNTRY',
        payload: {
            country:item,
        } 
     })
   }
   renderItem = ( {item} ) => {
       return (
           <CountriesItem
           {
               ...item
           }
           onPress = { () => { this.viewCountry(item)}}
           />
       )
   }
   keyExtractor = item => item.alpha2Code.toString();
    render(){

        return(
            <CountriesLayout>
                <Header>
                    <Image
                        source = { require(`../../../../assets/menu_grey.png`)}
                        //style = { styles.icon}
                    />
                </Header>
                <Searcher/>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data = { this.props.countriesAndFlags }
                    renderItem = {this.renderItem}
                    ItemSeparatorComponent = {this.ItemSeparator}
                >
                </FlatList>
            </CountriesLayout>
        )
    }
}

export default connect(mapStateToProps)(Countries);