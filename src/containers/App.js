import React, {Component} from 'react';
import './App.css';
import WeatherHeader from "../components/WeatherHeader";
import SearchReduxForm from "../components/SearchReduxForm";
import SearchError from "../components/SearchError";
import SearchResult from "../components/SearchResult";
import WeatherBanner from "../components/WeatherBanner";

class App extends Component {

    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <div className="ui raised very padded text segment">
                        <WeatherHeader/>
                        <SearchReduxForm/>
                        <SearchError/>
                        <SearchResult/>
                        <WeatherBanner/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App