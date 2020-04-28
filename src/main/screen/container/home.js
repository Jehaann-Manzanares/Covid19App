import React, { Component } from 'react';
import Layout from '../../layouts/layout_home'

class Home extends Component {
    render(){
        return (this.props.children)     
    }
}

export default Home;