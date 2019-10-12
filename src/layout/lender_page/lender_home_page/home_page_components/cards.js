import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import './cards.css';

class Cards extends Component {

    render() {
        return (
            <div className="WhiteColor card">
                <h1>{this.props.servicename}</h1>
                <button>IR</button>
            </div>
        );
    }
}

export { Cards };