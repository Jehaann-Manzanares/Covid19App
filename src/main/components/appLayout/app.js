import React from 'react';

import Home from '../../screen/container/home';
import Hero from '../Hero';
import ListCountries from '../../screen/container/Countries'


import { useSelector } from 'react-redux'




function AppLayout () {

    const selectedCountry = useSelector( (state) => {
        return state.selectedCountry
        })
    if ( selectedCountry) {
        return (
            <Home>
                <Hero/>
            </Home>
        )
        
    }
        
     return(
        <ListCountries/>
    )  
}


export default AppLayout;