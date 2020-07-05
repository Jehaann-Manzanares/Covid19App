import React, { useEffect } from 'react';

import CountriesLayout from '../../components/Countries/components/countries_layout';
import Header from '../../components/header';
import Searcher from '../../components/searcher' 
import CountriesItem from '../../components/Countries/components/CountriesItem'
import Separator from '../../components/Separator'
import API from '../../../utils/api'

import { useSelector, useDispatch } from 'react-redux'


import {
    Image,
    FlatList,
    StyleSheet
} from 'react-native'


function Countries () {


   const dispatch = useDispatch()

   const countryList = useSelector( (state) => {
    return state.countryList
    })
    console.log('el estado total de mi app es', countryList)

    useEffect(() => {
        
        //const CountriesAndFlags = API.getCountriesNameandFlag();
        fetch('https://restcountries.eu/rest/v2/all')
        .then( ( response ) =>{
            return response.json()
        })
        .then(( list ) => {
            dispatch({
                type:'SET_COUNTRIES_FLAG',
                payload: list
            })
            console.log("esto hay en el fetch",list)
        })
},[dispatch])

   ItemSeparator = () => <Separator/> 

   viewCountry = ( item ) =>{   
    dispatch({
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
        return(
            <CountriesLayout>
                <Header>
                    <Image
                        source = { require(`../../../../assets/menu_grey.png`)}
                        style = { styles.icon}
                    />
                </Header>
                <Searcher/>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data = {countryList}
                    renderItem = {this.renderItem}
                    ItemSeparatorComponent = {this.ItemSeparator}
                >
                </FlatList>
            </CountriesLayout>
        )
}

const styles = StyleSheet.create({
    icon:{
        width: 30,
        height: 30,
        resizeMode: 'contain'
    }
})
export default Countries