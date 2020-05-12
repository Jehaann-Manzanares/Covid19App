import React, { Component } from 'react';

import {
    TextInput,
    View,
    StyleSheet,
    Image
} from 'react-native';

class Searcher extends Component {

    handleSubmit = async () => {
       
        const movies = await API.searchMovie(this.state.text);
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: movies[0]
            }
        })
     }
 
     handleChange = ( text ) => {
         this.setState({
             text
         })
     }
    render(){
        return(
            <View style = { styles.container}>
                <Image
                    //source={ require('../../../assets/search.png')}
                    style = { styles.icon}

                ></Image>
                <TextInput
                    placeholder="Search"
                    //autoCorrect={ false }
                    autoCapitalize='words'
                    onSubmitEditing={ this.handleSubmit}
                    onChange={ this.handleChange}
                    style= {styles.input}
    
                />

            </View>
        )
    }
}

 const styles = StyleSheet.create({
     container:{
        flexDirection:'row',
        margin: 20,
        alignItems:'center',
        borderRadius:7,
        backgroundColor:'white',
        padding:10
        
     },
     icon:{
        width:16,
        height:16,
        resizeMode:'contain'
     },
     input:{
        fontSize:17,
        color:'#707070',
        fontWeight:'700',
        padding:10
        
     }
 })
export default Searcher;