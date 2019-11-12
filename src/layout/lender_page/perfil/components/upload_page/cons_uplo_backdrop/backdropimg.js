import React, { Component } from 'react';


class Backdrop extends Component {

    render() {
        return (
            <div className="backdropimg" onClick={()=>{this.props.uploadimgpagehandler(false)}}></div>
        );
    }
}

export { Backdrop };