import React, {Component} from "react";

import {connect} from 'react-redux';
import {fetchDefaultCity, fetchSearchCity} from "../actions";


class SearchError extends Component {

    renderError = () => this.props.city.message ? (
        <div id="searchError" className="ui segment form error">
            <div className="ui center aligned red segment">
                <i className="info icon"/>
                <span>{this.props.city.message}</span>
            </div>
        </div>
    ) : ''


    render() {
        return <div>{this.renderError()}</div>
    }
}


const mapStateToProps = state => ({city: state.city})
export default connect(mapStateToProps, {fetchDefaultCity, fetchSearchCity})(SearchError)
