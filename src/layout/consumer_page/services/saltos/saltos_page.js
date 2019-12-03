import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import { Barra } from '../Barra/Barra.js';
import { ServiciosContenedor } from '../servicios_contenedor/ServiciosConedor';
import { ServiciosDispController } from '../../../../controllers/serviciosDisponibles_controller'

class SaltosPage extends Component {

    state = {
        animales: []
    }

    async componentDidMount() {
        this.readAllSaltos();
    }

    readAllSaltos = async () => {
        try {
            var serviciosDispController = new ServiciosDispController();
            const animales = await serviciosDispController.readServicioSalto();
            this.setState({ animales: animales });
        } catch (error) {
            console.log(error)
        }
    }

    filterByLocalidad = async (localidad) => {
        if (localidad) {
            var serviciosDispController = new ServiciosDispController();
            const animales = await serviciosDispController.readServicioSaltoFiltroLocalidad(localidad);
            this.setState({ animales: animales })
        } else {
            this.readAllSaltos();
        }
    }

    filtrarPorPrecio = async (min = 0, max = 0) => {
        if (min && max) {
            var serviciosDispController = new ServiciosDispController();
            const animales = await serviciosDispController.readServicioSaltoFiltroPrecio(min, max);
            this.setState({ animales: animales });
        } else {
            this.readAllSaltos();
        }
    }

    render() {
        return (
            <div >
                <div className="container-fluid">
                    <div className="row align-items-top">
                        <div className="col-md-12 col-lg-3 " >
                            <Barra filterByLocalidad={this.filterByLocalidad} filtrarPorPrecio={this.filtrarPorPrecio} />
                        </div>
                        <div className="col-md-12 col-lg-9 "  >
                            <h1 className="CurvyTextFontBig" style={{ margin: "5%", textAlign: "center" }}>
                                Saltos
                            </h1>

                            <ServiciosContenedor json={this.state.animales} type="Saltos"></ServiciosContenedor>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { SaltosPage };