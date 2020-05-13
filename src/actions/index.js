import {SET_DEFAULT_CITY, SET_SEARCH_CITY} from './types';

import openweathermap from '../api/openweathermap';

export const fetchDefaultCity = () => async dispatch => {
    console.log('fetchDefaultCity()');

    const response = await openweathermap.get('/weather')
    dispatch({type: SET_DEFAULT_CITY, payload: response.data})
}

// export function fetchDefaultCityOld() {
//
//     return function (dispatch) {
//         openweathermap.get('/weather')
//             .then(response => dispatch({
//                 type: SET_DEFAULT_CITY,
//                 payload: response.data
//             }))
//     }
// }


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
            })
    }
}


export const fetchCity = (searchRegexTerm) => async dispatch => {
    const response = await openweathermap.get('/weather',
        {
            params: {
                q: searchRegexTerm
            }
        })

    dispatch({type: SET_SEARCH_CITY, payload: response.data})
}
