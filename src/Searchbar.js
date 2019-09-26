import React, { Component } from "react";


class SearchBar extends Component {
    state = { query: "" };

    handleChange = event => {
        this.setState({ query: event.target.value });
        this.props.changeHandler(event.target.value);
    };

    render() {
        return (
            <div className="form-group col-lg-6 col-12 mx-auto">
                <div className="input-group my-3">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search for movies"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />

                </div>
            </div>
        );
    }
}

export default SearchBar;
