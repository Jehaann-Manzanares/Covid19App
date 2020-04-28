import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    
} from 'react-native';

function Cases ( props ) {
    return (
        
        <View style= {styles.container}>
            <View style= {styles.item}>
                <View style = {styles.colum1}>
                    <Text style= {styles.title}>{props.Country}</Text>
                    <Text style= {styles.total}>{props.TotalConfirmed}</Text>
                </View>
                <View style = {styles.colum2}>
                    <View style = {styles.colum2_procents}>
                        <Image
                        source = { require('../../../../assets/down-arrow.png')}
                        style= {styles.img}
                        />
                        <View style={styles.container_text}>
                            <Text style={styles.num}>{props.TotalDeaths}</Text>
                            <Text style={styles.text}>Deaths</Text>
                        </View>
                    </View>
                    <View style = {styles.colum2_procents}>
                        <Image
                        source = { require('../../../../assets/up-arrow.png')}
                        style= {styles.img}
                        />
                        <View  style={styles.container_text}>
                            <Text style={styles.num}>{props.TotalRecovered}</Text>
                            <Text style={styles.text}>Recovered</Text>
                        </View>
                    </View>
                   
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:20,
        paddingHorizontal:5,
        
 
       
    },
    item:{
        backgroundColor:'white',
        padding:15,
        borderRadius: 5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    title:{
        color:'#909090',
        fontSize:12,
        textTransform:'uppercase'
        
    },
    total:{
        color:'black',
        fontSize:45,
        fontWeight:'bold',
        marginBottom:10
    },
    img:{
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
    container_text:{
 
        flexDirection:'column', 
    },
    text:{
        
        color:'#909090',
        fontSize:15,     
        
    },
    num:{
        fontWeight:'bold',
        fontSize:25,
        marginTop:0

    }
})
export default Cases;