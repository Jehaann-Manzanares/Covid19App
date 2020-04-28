
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,


} from 'react-native';

import AppLayout from './src/main/components/appLayout/app'


class App extends Component {
  render(){
      return (  
          <SafeAreaView>
            <AppLayout/>
          </SafeAreaView>
      );
  }
};

const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    backgroundColor: 'white',
  },
});

export default App;
