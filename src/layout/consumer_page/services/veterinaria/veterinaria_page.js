import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import { Barra } from '../Barra/Barra.js';
import { ServiciosContenedor } from '../servicios_contenedor/ServiciosConedor';
import { ServiciosDispController } from '../../../../controllers/serviciosDisponibles_controller'

class VeterinariaPage extends Component {

    state = {
        veterinarias: []
    }

    async componentDidMount() {
        this.readAllVeterinarias();
    }

    readAllVeterinarias = async () => {
        try {
            var serviciosDispController = new ServiciosDispController();
            const veterinarias = await serviciosDispController.readServicioVeterinaria();
            this.setState({veterinarias:veterinarias})
        } catch (error) {
            console.log(error)
        }
    }

    filterByLocalidad = async (localidad) => {
        if (localidad) {
            var serviciosDispController = new ServiciosDispController();
            const veterinarias = await serviciosDispController.readServicioVeterinarioFiltroLocalidad(localidad);
            this.setState({ veterinarias: veterinarias })
        } else {
            this.readAllVeterinarias();
        }
    }

    filtrarPorPrecio = async (min = 0, max = 0) => {
        if (min && max) {
            var serviciosDispController = new ServiciosDispController();
            const veterinarias = await serviciosDispController.readServicioVeterinariaFiltroPrecio(min, max);
            this.setState({ veterinarias: veterinarias });
        } else {
            this.readAllVeterinarias();
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
                                Veterinaria
                            </h1>
                            
                            <ServiciosContenedor json={this.state.veterinarias} type="Veterinaria"></ServiciosContenedor>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { VeterinariaPage };
