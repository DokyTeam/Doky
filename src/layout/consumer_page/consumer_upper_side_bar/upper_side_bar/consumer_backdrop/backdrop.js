import React, { Component } from 'react';
import './backdrop.css'


class Backdrop extends Component {

    render() {
        return (
            <div className="backdrop-consumer" onClick={this.props.backdropClickhandler}>

            </div>
        );
    }
}

export { Backdrop };