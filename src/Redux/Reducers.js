import {FIND_CITY, REMOVE_CITY, DETAIL} from './Const.js'

const initialState = {
    cities: [],
    city: {}
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FIND_CITY:
            return {
                ...state,
                cities: state.cities.concat(action.payload)
            }
        case REMOVE_CITY:
            return {
                ...state,
                cities: state.cities.filter(city => {return city.id !== action.payload})
            }
        case DETAIL:
            return {
                ...state, 
                city: state.cities.find(city => {return city.id == action.payload})
            }
        default: return state;
    }
}

export default reducer; 