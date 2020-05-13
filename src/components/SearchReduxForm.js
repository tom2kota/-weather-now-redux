import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";

import {connect} from 'react-redux';
import {fetchCity} from "../actions";

class SearchReduxForm extends Component {

    renderError({error, touched}) {
        if (error && touched) {
            return <div className="ui error message">
                <div className="header">
                    {error}
                </div>
            </div>
        }

    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`

        return (
            <div className={className}>
                <div className="ui left icon input">
                    <i className="search location icon"/>
                    <label>{label}</label>
                    <input {...input} autoComplete="off" placeholder="Enter city"/>
                </div>
                {this.renderError(meta)}
            </div>
        )
    }


    onSubmit = (valueInput) => {
        console.log('onSubmit(valueInput):   ...  ', valueInput);
        this.props.fetchCity(valueInput)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="city" component={this.renderInput}/>
                    <button className="ui fluid large teal submit button"> Search</button>
                </form>
            </div>
        )
    }

}

const validate = (valueInput) => {
    const errors = {}

    if (!valueInput.city) {
        errors.city = 'You must enter a city name'
    }

    return errors
}

const formWrapped = reduxForm({
    form: 'SearchForm', validate
})(SearchReduxForm)

const mapStateToProps = state => ({inputFormCity: state.inputFormCity})

export default connect(mapStateToProps, {fetchCity})(formWrapped)