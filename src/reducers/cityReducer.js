import {SET_DEFAULT_CITY, SET_SEARCH_CITY, SET_FETCH_ERROR} from "../actions/types";

const INIT_STATE = {
    defaultCity: [],
    searchCity: [],
    fetchError: []
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SET_DEFAULT_CITY:
            return action.payload
        case SET_SEARCH_CITY:
            return action.payload
        case SET_FETCH_ERROR:
            return action.payload
        default:
            return state
    }
}
