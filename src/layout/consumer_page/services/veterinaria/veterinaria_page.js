import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import { Barra } from '../Barra/Barra.js';
import { ServiciosContenedor } from '../servicios_contenedor/ServiciosConedor';
import veterinaria_json from './veterinaria.json';

class VeterinariaPage extends Component {

    render() {
        return (
            <div className="WhiteColor">
                <div className="container-fluid">
                    <div className="row align-items-top">
                        <div className="col-md-12 col-lg-3 " >
                            <Barra consumercontenthandler={this.props.consumercontenthandler} />
                        </div>
                        <div className="col-md-12 col-lg-9 "  >
                            <h1 className="CurvyTextFontBig" style={{ margin: "5%", textAlign: "center" }}>
                                Veterinaria
                            </h1>
                            <ServiciosContenedor json={veterinaria_json}></ServiciosContenedor>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { VeterinariaPage };