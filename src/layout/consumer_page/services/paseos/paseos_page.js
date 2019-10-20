import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import { Barra } from '../Barra/Barra.js';
import paseos_json from './paseos.json';
import { ServiciosContenedor } from '../servicios_contenedor/ServiciosConedor';
class PaseosPage extends Component {

    render() {   
        return (
            <div >
            <div className="container-fluid">
                <div className="row align-items-top">
                    <div className="col-md-12 col-lg-3 " >
                        <Barra consumercontenthandler={this.props.consumercontenthandler} />
                    </div>
                    <div className="col-md-12 col-lg-9 "  >
                        <h1 className="CurvyTextFontBig" style={{ margin: "5%", textAlign: "center" }}>
                            Paseos
                        </h1>
                        <ServiciosContenedor json={paseos_json}></ServiciosContenedor>

                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export { PaseosPage };