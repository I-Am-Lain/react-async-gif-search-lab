import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        searchValue: ''
    }

    handleChange = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={(e) => this.props.handleSubmit(e, this.state.searchValue)}>
                <label htmlFor='search-value'>Enter a Search Term:</label>
                <input type='text' onChange={this.handleChange} name='search-value'/>
                <button type='submit'>Find Gifs</button>
            </form>
        )
    }
}
