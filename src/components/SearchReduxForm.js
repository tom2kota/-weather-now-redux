import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";

import {connect} from 'react-redux';
import {fetchSearchCity} from "../actions";

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

    renderInputField = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`

        return (
            <div className={className}>
                <div className="ui left icon input">
                    <i className="search location icon"/>
                    <label>{label}</label>
                    <input {...input}
                           placeholder="Enter city"
                           type="search"
                           name="city"
                           required="required"
                           pattern=".{3,40}"
                           autoComplete="off"
                           minLength="3"
                           maxLength="40"
                           title="Allowed size (min: 3, max: 40 symbols)"
                    />
                </div>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (valueInput) => {
        this.props.fetchSearchCity(valueInput.city)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form error"
                      onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="city"
                           component={this.renderInputField}/>
                    <button className="ui fluid large teal submit button">
                        Search
                    </button>
                </form>
            </div>
        )
    }

}

const validate = (valueInput) => {
    const errors = {}
    if (!valueInput.city) {
        errors.city = 'You must enter a city name'
    } else if (valueInput.city.length < 3) {
        errors.city = 'Must be 3 characters or more'
    } else if (!/^[a-zа-я\s-]{2,40}$/gi.test(valueInput.city)) {
        errors.city = 'You must enter a correct city name'
    }
    return errors
}

const formWrapped = reduxForm({
    form: 'syncValidationFormIdentifier', validate
})(SearchReduxForm)

const mapStateToProps = state => ({inputFormCity: state.inputFormCity})

export default connect(mapStateToProps, {fetchSearchCity})(formWrapped)
