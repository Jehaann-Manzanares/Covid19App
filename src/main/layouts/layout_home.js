import React, { Component } from 'react';
import { View, StyleSheet, } from 'react-native';

function HomeLayout (props) {
        return (
            
            <View style = {styles.container}> 
                    {props.children} 
            </View>
            )
            
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
       
    },
   
})
export default HomeLayout;