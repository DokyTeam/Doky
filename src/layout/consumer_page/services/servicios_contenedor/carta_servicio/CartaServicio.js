import React, { Component } from 'react';

import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css';
import './cartaServicio.css';

class CartaServicio extends Component {

    render() {
        return (

            <div className="WhiteColor card h-100 " style= {{borderRadius: 10}}>
                
                <button className="button_card ">
                <h1 className="TextFont MediumTextFont ">{this.props.servicename}</h1>
                    <img className="img_card" src={this.props.foto} title="Foto10" alt="Foto10"></img>
                    <p className="SmallTextFont card-text ">{this.props.descripcion}</p>
                    
                </button>

                
            </div>
        );
    }
}

export { CartaServicio };