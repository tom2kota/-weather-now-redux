import {SET_DEFAULT_CITY, SET_SEARCH_CITY} from "../actions/types";

const INIT_STATE = {
    defaultCity: [],
    searchCity: []
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SET_DEFAULT_CITY:
            return action.payload
        default:
            return state
    }
}