import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import './cards.css';

class Cards extends Component {

    render() {
        return (
            <div>
                <h1 className="SmallTextFont fix WhiteColor toprad fix2">{this.props.servicename}</h1>
                <p className="TextFont fix WhiteColor">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <button className="buttonlol" onClick={() => this.props.lendercontenthandler(this.props.servicename)}>IR</button>
            </div>
        );
    }
}

export { Cards };