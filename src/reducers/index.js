import {combineReducers} from "redux";
import cityReducer from "./cityReducer";

import {reducer as formReducer} from "redux-form";


export default combineReducers({
    city: cityReducer,
    form: formReducer
})