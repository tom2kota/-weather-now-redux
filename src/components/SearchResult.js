import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchDefaultCity} from '../actions';


class SearchResult extends Component {
    componentDidMount() {
        this.props.fetchDefaultCity()
    }

    renderCityName = () => this.props.city.id ? this.props.city.name : 'City'
    renderCityCode = () => this.props.city.id ? this.props.city.sys.country : 'Country Code'
    renderCityFlag = () => this.props.city.id ? this.props.city.sys.country.toLowerCase() : ''
    renderCityTemperature = () => this.props.city.id ? this.props.city.main.temp.toFixed(0) : 'City Temperature'
    renderCityWeather = () => this.props.city.id ? this.props.city.weather.map(x => x.description).toString().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))) : 'City Weather'


    renderList = () => {
        return (
            <div className="ui segment">
                <div className="ui center aligned teal segment">
                    <span><i className="flag outline icon"/>{this.renderCityCode()} &nbsp;</span>
                    <i className={`flag ${this.renderCityFlag()}`}/>
                </div>
                <div className="ui center aligned teal segment">
                    <i className="building outline icon"/>
                    <span>{this.renderCityName()}</span>
                </div>
                <div className="ui center aligned teal segment">
                    <i className="thermometer half icon"/>
                    <span>{this.renderCityTemperature()} &#8451;</span>
                </div>
                <div className="ui center aligned teal segment">
                    <i className="umbrella icon"/>
                    <span>{this.renderCityWeather()}</span>
                </div>
            </div>
        )
    }

    render() {
        return <div>{this.renderList()}</div>
    }
}


const mapStateToProps = state => ({city: state.city})
export default connect(mapStateToProps, {fetchDefaultCity})(SearchResult)