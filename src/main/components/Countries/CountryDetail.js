import React,  { useState,useEffect } from 'react';
import { useSelector } from 'react-redux'

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    StatusBar,


} from 'react-native';


function CountryDetail (){
        let countrySelected = useSelector( state => state.selectedCountry.alpha2Code)
        const [country, setCountry] = useState(countrySelected)
        console.log("country selected",countrySelected)

        useEffect ( () => {
            fetch(`https://api.covid19api.com/live/country/${countrySelected.toLowerCase()}`)
            .then( ( response ) => response.json() )
            .then( ( data ) => {
                setCountry(data[18])
            })
        })
        console.log("country",country)
        return(
            <View backgroundColor="#FA5252">
                <StatusBar backgroundColor="#FA5252" barStyle="light-content"/>
                <View style = {styles.container}>
                    <Text style = { styles.date}>{country.Date}</Text>
                    <Text style = { styles.title}>Total Cases in {country.Country} </Text>
                    <Text style = { styles.total}>{country.Confirmed}</Text>
                    <View style= {styles.container2}>
                    <View style= {styles.item}>
                        <Text style= {styles.title2}>Death</Text>
                        <Text style= {styles.total2}>{country.Deaths}</Text>
                        <ImageBackground
                        source = { require('../../../../assets/graphic_red.png')}
                        style= {styles.img} />
                    </View>
                    <View style= {styles.item}>
                        <Text style= {styles.title2}>Recovered</Text>
        <Text style= {styles.totalGreen}>{country.Confirmed}</Text>
                        <ImageBackground
                        source = { require('../../../../assets/graphic_green.png')}
                        style= {styles.img} />
                    </View>
                    </View>  
                    <View style= {styles.container3}>
                    <View style= {styles.item3}>
                        <View style = {styles.colum1}>
                            <Text style= {styles.title3}>Active cases</Text>
                            <Text style= {styles.total3}>{country.Active}</Text>
                        </View>
                        <View style = {styles.colum2}>
                            <View style = {styles.colum2_procents}>
                                <Image
                                source = { require('../../../../assets/arrow_green.png')}
                                style= {styles.img3}
                                />
                                <View style={styles.container_text3}>
                                    <Text style={styles.num3}>{country.Recovered}</Text>
                                    <Text style={styles.text3}>Recovered</Text>
                                </View>
                            </View>
                            <View style = {styles.colum2_procents}>
                                <Image
                                source = { require('../../../../assets/arrow_red.png')}
                                style= {styles.img3}
                                />
                                <View  style={styles.container_text3}>
                                    <Text style={styles.num3}>{country.Deaths}</Text>
                                    <Text style={styles.text3}>Deaths</Text>
                                </View>
                            </View>
                           
                        </View>
                    </View>
                </View>
                </View>
                </View>
             
        )

    } 


const styles = StyleSheet.create({
    radar:{
        width:25,
        height:25,
        resizeMode:'contain'

    },
    container:{
        paddingHorizontal: 10,
        backgroundColor: "#FA5252",
        maxHeight: 150,
        marginBottom:80,
        marginTop:20

    },
    date:{
        color:'white',
        fontSize: 14,
        paddingBottom:5
    },
    title:{
        color:'white',
        fontSize: 23,
        fontWeight:'600',
        paddingBottom:5
    },
    total:{
        color:'white',
        fontSize: 50,
        fontWeight:'700'
    },
    container2:{
        marginTop:20,
        //paddingHorizontal:5,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:"center",
   
    },
    item:{
        backgroundColor:'white',
        padding:5,
        borderRadius: 7,
        height:170,
        width:'48%',
        
    },
    title2:{
        color:'#707070',
        fontSize:14,
        textTransform:'uppercase',
        marginTop:10,
        marginLeft:15
        
        
        
    },
    total2:{
        color:'#FA5252',
        fontSize:30,
        fontWeight:'bold',
        marginBottom:5,
        marginLeft:15
        

    },
    totalGreen:{
        color:'#34C360',
        fontSize:30,
        fontWeight:'bold',
        marginBottom:5,
        marginLeft:15
    },
    img:{
        width:'100%',
        height: '70%',
        //resizeMode:'center'
        overflow:'hidden'

    },
    container3:{
        marginTop:10,
        //paddingHorizontal:5,
        
    },
    item3:{
        backgroundColor:'white',
        padding:15,
        borderRadius: 7,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    title3:{
        color:'#909090',
        fontSize:12,
        textTransform:'uppercase'
        
    },
    total3:{
        color:'black',
        fontSize:45,
        fontWeight:'bold',
        marginBottom:10
    },
    img3:{
        width:15,
        height: 15,
        resizeMode:'center',
        marginRight:5,
        marginTop:8
        

    },
    colum1:{
       marginRight:25,
       width:120
    },
    colum2:{
        flexDirection:'column',
        
    },
    colum2_procents:{
        flexDirection:'row',      
    },
    container_text3:{
 
        flexDirection:'column', 
    },
    text3:{
        
        color:'#909090',
        fontSize:15,     
        
    },
    num3:{
        fontWeight:'bold',
        fontSize:25,
        marginTop:0

    }

})


export default CountryDetail;