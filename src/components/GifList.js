import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.threeGifs.map(gif => {
                        return <li key={gif.id}><img src={gif.images.original.url} alt=''/></li>
                    })
                }
            </ul>
        )
    }
}
