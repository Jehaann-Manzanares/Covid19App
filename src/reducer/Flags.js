import { Switch } from "react-native";

function Flags ( state = {}, action ){
 
    switch (action.type) {
        
        case 'SET_COUNTRIES_FLAG':
                console.log('voy a actualizar la lista de paises')
                return {...state, countryList:action.payload}
            break;
        case 'SET_COUNTRY':
                return {...state, ...action.payload}
                
            break;
        case 'SET_SELECTED_COUNTRY' :
            return {...state, selectedCountry : action.payload.country}
        default:
            return state

    }
}

export default Flags;