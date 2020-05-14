import {SET_DEFAULT_CITY, SET_SEARCH_CITY, SET_FETCH_ERROR} from './types';

import openweathermap from '../api/openweathermap';

export const fetchDefaultCity = () => async dispatch => {
    const response = await openweathermap.get('/weather')
    dispatch({type: SET_DEFAULT_CITY, payload: response.data})
}


export function fetchSearchCity(query, callback) {
    return function (dispatch) {
        openweathermap.get('/weather', {params: {q: query}})
            .then(response => {
                dispatch({
                    type: SET_SEARCH_CITY,
                    payload: response.data
                })
                if (callback) {
                    callback()
                }
            }).catch(error => {
                dispatch({
                    type: SET_FETCH_ERROR,
                    payload: error
                })
            }
        )
    }
}


