
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import {
  SafeAreaView,
} from 'react-native';

import { createStore } from 'redux'
import reducer from './src/reducer/Flags'



import AppLayout from './src/main/components/appLayout/app'


const initalState = {
  summaryItem:[],
  GlobalItem:[],
  CountriesItem:[],
  CountriesAndFlagsItem:[]
}   


const store = createStore(  reducer, initalState)

class App extends Component {
  render(){
      return (  
        <Provider
          store = {store}
        >
          <SafeAreaView>
            <AppLayout/>
          </SafeAreaView>
        </Provider>
      );
  }
};


export default App;
