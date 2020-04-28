import React, { Component } from 'react';
import { FlatList,  } from 'react-native';

import Layout from './container/data-items-layout';
import DeathRecovered from './deathrecovered'
import Cases from './cases'
class DataItems extends Component {
    renderEmpty = () => <Empty text = "Parece que no tienes Internet"></Empty>
    itemSeparator = () => <Separator/>

   /* viewMenu = ( item ) => {
        this.props.dispatch({
            type:'SET_SELECTED_MENU',
            payload: {
                menu: item,
            }
        })
    }
    
    renderItem = ({ item }) => {
        return(
            <Item 
            {...item}
            onPress = { ()=> { this.viewMenu(item) }}
            />

        )
    }
    */

   renderItem = ({ item }) => {
    return(
        <DeathRecovered 
        {...item}
        />

        )
    }

    renderCases = ({ item }) => {
        return(
            <Cases 
            {...item}
            />
    
            )
        }
    
    //keyExtractor = (item) => item.id.toString()
    render(){
    
        return (
            <Layout>
                <FlatList
                    //keyExtractor = {this.keyExtractor}
                    data = {this.props.countries}
                    //ListEmptyComponent = {this.renderEmpty}
                    //ItemSeparatorComponent = { this.itemSeparator}
                    renderItem = {this.renderCases}
                    
                />
            </Layout>
        )
    }

}

export default DataItems;