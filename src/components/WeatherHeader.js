import React from "react";
import {ReactComponent as WeatherLogo} from "../images/weather-logo.svg";

const WeatherHeader = () => (
    <h1 className="ui teal image header">
        <WeatherLogo className="image"/>
        <span className="content">Weather NOW!</span>
    </h1>
)

export default WeatherHeader