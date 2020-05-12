
import React, { Component } from 'react';
import {
  SafeAreaView,
} from 'react-native';

import { Provider } from 'react-redux';
import store from './src/stores/store'


import AppLayout from './src/main/components/appLayout/app'


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
