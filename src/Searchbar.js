import React, { Component } from 'react'

export default class Searchbar extends Component {
    state = {
        term: ''
    };

    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }
  render() {
    return (
        <nav>
            <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Youtube Clone</a>
            <form onSubmit={this.handleSubmit}>
                <div className="input-field">
                <input id="search" onChange={this.handleChange} type="search" required/>
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
                </div>
            </form>
            </div>
        </nav>
    )
  }
}
