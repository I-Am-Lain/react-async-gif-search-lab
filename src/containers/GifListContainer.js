import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        threeGifs: []
    }


    handleSubmit = (e, searchV) => {
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchV}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(json => 
            this.setState({
                threeGifs: json.data.slice(0,3)
            })
        )
        e.target.reset()
    }

    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit}/>
                <GifList threeGifs={this.state.threeGifs}/>
            </div>
        )
    }
}
