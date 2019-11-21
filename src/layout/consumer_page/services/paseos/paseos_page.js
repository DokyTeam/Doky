import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import { Barra } from '../Barra/Barra.js';
import { ServiciosContenedor } from '../servicios_contenedor/ServiciosConedor';
import { ServiciosDispController } from '../../../../controllers/serviciosDisponibles_controller'

class PaseosPage extends Component {

    state = {
        paseos: []
    }

    async componentDidMount() {
        try {
            var serviciosDispController = new ServiciosDispController();
            const paseos = await serviciosDispController.readServicioPaseo();
            this.setState({paseos:paseos});
        } catch (error) {
            console.log(error)
        }
    }

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
                        
                        <ServiciosContenedor json={this.state.paseos} type="Paseos" ></ServiciosContenedor>

                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export { PaseosPage };