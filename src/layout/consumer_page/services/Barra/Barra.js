import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import logo from './images/hamburger.png';
import { LocalidadesController } from '../../../../controllers/localidades_controller';

class Barra extends Component {
    state = {
        localidades: []
    }

    //Se ejecuta cuando ya se ha cargado el componente, es async por que trabaja de manera asincrona
    async componentDidMount() {
        try {
            let localidadesController = new LocalidadesController();
            const localidades = await localidadesController.readLocalidadesyBarrios()
            this.setState({ localidades: localidades })
        } catch (error) {
            console.log("ha ocurrido un error")
        }
    }

    createoption = (localidades) => {
        let table = []
        table.push(
            localidades.map(
                localidad => (
                    <option value={localidad.localidad} key={localidad.localidad} >{localidad.localidad}</option>
                )
            )
        )
        return table
    }

    render() {
        return (
            <div className="leftcontainer">
                <nav className="navbar navbar-expand-lg  flex-column">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <img src={logo} alt="h" width="50px"></img>
                    </button>

                    <div className="collapse navbar-collapse flex-column" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto flex-column">
                            <li className="nav-item dropdown">
                                <h2 className="nav-link ">Servicios</h2>
                                <hr />
                                <button className="dropdown-item" onClick={() => this.props.consumercontenthandler('Guardería')}>Guardería</button>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item" onClick={() => this.props.consumercontenthandler('Veterinaria')}>Veterinaria</button>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item" onClick={() => this.props.consumercontenthandler('Paseos')}>Paseos</button>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item" onClick={() => this.props.consumercontenthandler('Saltos')} >Saltos</button>
                            </li>
                            <hr />
                            <li className="nav-item">
                                <h2 className="nav-link ">Filtros</h2>
                            </li>
                            <hr />
                            <li className="nav-item">
                                <h5 className="nav-link " >Ubicación</h5>
                                <div className="input-group">
                                    <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                        <option defaultValue>Seleccione...</option>
                                        {this.createoption(this.state.localidades)}
                                    </select>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Filtrar</button>
                                    </div>
                                </div>
                                <div className="dropdown-divider"></div>
                            </li>
                            <li className="nav-item">
                                <h5 className="nav-link " >Precio</h5>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">$</span>
                                        <span className="input-group-text">Desde</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">$</span>
                                        <span className="input-group-text">Hasta</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                                </div>
                                <div className="input-group-append float-right">
                                    <button className="btn btn-outline-secondary" type="button">Filtrar</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }



}

export { Barra };