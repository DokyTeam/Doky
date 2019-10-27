import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import './cards.css';

class Cards extends Component {

    render() {
        return (
            <div className="WhiteColor card h-97">
                <h1 className="TextFont title">{this.props.servicename}</h1>
                <img className="img" src={this.props.foto} title="Foto10" alt="Foto10"></img>
                <p className="SmallTextFont text">{this.props.descripcion}</p>
                <button className="buttonbottom MainColor TextWhiteColor MediumTextFont" onClick={() => this.props.lendercontenthandler(this.props.servicename)}>IR</button>
            </div>
        );
    }
}

export { Cards };