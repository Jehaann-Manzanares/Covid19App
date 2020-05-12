import { Switch } from "react-native";

function Flags ( state = {}, action ){
    switch (action.type) {
        case 'SET_SUMMARY':
                return {...state, ...action.payload}
            break;
        case 'SET_GLOBAL':
                return {...state, ...action.payload}
            break;
            
        case 'SET_COUNTRIES':
                return {...state, ...action.payload}
            break;
        case 'SET_COUNTRIES_FLAG':
                return {...state, ...action.payload}
            break;
        case 'SET_SELECTED_COUNTRY' :
            return {...state, selectedCountry : action.payload.country}
        default:
            return state

    }
}

export default Flags;