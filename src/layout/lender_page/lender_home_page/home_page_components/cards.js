import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import './cards.css';
import { Link } from 'react-router-dom';

class Cards extends Component {

    render() {
        const link = "/"+this.props.servicename;
        return (
            <div className="WhiteColor card h-97">
                <h1 className="TextFont title">{this.props.servicename}</h1>
                <img className="img" src={this.props.foto} title="Foto10" alt="Foto10"></img>
                <p className="SmallTextFont text">{this.props.descripcion}</p>
                <Link to={link}><button className="buttonbottom MainColor TextWhiteColor MediumTextFont">IR</button></Link>
            </div>
        );
    }
}

export { Cards };