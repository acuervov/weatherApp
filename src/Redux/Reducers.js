import {FIND_CITY} from './Const.js'

const initialState = {
    cities: [],
    city: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FIND_CITY:
            console.log(action.payload)
            return {
                ...state,
                cities: state.cities.concat(action.payload)
            }
        
        default: return state;
    }
}

export default reducer; 