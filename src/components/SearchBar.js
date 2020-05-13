// import React, {Component} from "react";
//
// class SearchBar extends Component {
//
//     state = {
//         searchRegexTerm: 'кингстон',
//         searchRegexError: 'Regex Error! ... Check spelling'
//     };
//
//
//     onInputChange = event => {
//         this.setState({searchRegexTerm: event.target.value})
//     };
//
//     // (6 - react)
//     onFormSubmit = event => {
//         event.preventDefault();
//         const regexp = /^[a-zа-я\s-]{2,40}$/gi;
//
//         if (regexp.test(this.state.searchRegexTerm)) {
//             // (7 - react) true
//             this.props.onTextSubmit(this.state.searchRegexTerm)
//         } else {
//             console.log('RegEx check Error:', this.state.searchRegexTerm);
//             this.props.onRegexError(this.state.searchRegexError)
//         }
//     };
//
//
//     render() {
//         return (
//             <form onSubmit={this.onFormSubmit} className="ui large form">
//                 {/*       <!--   // (5 - react)   -->    */}
//                 <div className="field">
//                     <div className="ui left icon input">
//                         <i className="search location icon"/>
//                         <label htmlFor="weatherCountry">
//                         </label>
//                         {/*       <!--   // (4 - react)   -->    */}
//                         <input id="weatherCountry"
//                                type="search"
//                                name="city"
//                                placeholder="Enter your city"
//                                required="required"
//                                autoComplete="off"
//                                minLength="2"
//                                maxLength="40"
//                                title="Allowed size (min: 2, max: 40 symbols)"
//                                pattern=".{2,40}"
//                                value={this.state.searchRegexTerm}
//                                onChange={this.onInputChange}
//                         />
//                     </div>
//                 </div>
//
//                 <button type="submit"
//                         id="weatherSearchButton"
//                         className="ui fluid large teal submit button">
//                     Search
//                 </button>
//
//             </form>
//         )
//     }
// }
//
// export default SearchBar