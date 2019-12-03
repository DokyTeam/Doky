import React, { Component } from 'react';
import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import { Barra } from '../Barra/Barra.js';
import { ServiciosContenedor } from '../servicios_contenedor/ServiciosConedor';
import { ServiciosDispController } from '../../../../controllers/serviciosDisponibles_controller'


class GuarderiaPage extends Component {

    state = {
        guarderias: []
    }

    async componentDidMount() {
        this.readAllGuarderias();
    }

    readAllGuarderias = async () => {
        try {
            var serviciosDispController = new ServiciosDispController();
            const guarderias = await serviciosDispController.readServicioGuarderia();
            this.setState({guarderias:guarderias})
        } catch (error) {
            console.log(error)
        }
    }

    filterByLocalidad = async (localidad) => {
        if (localidad) {
            var serviciosDispController = new ServiciosDispController();
            const guarderias = await serviciosDispController.readServicioGuarderiaFiltroLocalidad(localidad);
            this.setState({ guarderias: guarderias })
        } else {
            this.readAllGuarderias();
        }
    }

    filtrarPorPrecio = async (min = 0, max = 0) => {
        if (min && max) {
            var serviciosDispController = new ServiciosDispController();
            const guarderias = await serviciosDispController.readServicioGuarderiaFiltroPrecio(min, max);
            this.setState({ guarderias: guarderias });
        } else {
            this.readAllGuarderias();
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
                                Guardería
                            </h1>
                           
                            <ServiciosContenedor json={this.state.guarderias} type="Guardería"></ServiciosContenedor>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { GuarderiaPage };