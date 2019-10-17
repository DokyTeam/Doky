import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import ciudades from './ciudades.json';
class Barra extends Component {
    
    createoption = () => {
        let table = []
        // Outer loop to create parent

       table.push (ciudades.map((data, index) => {
            return <option  key={index} value={data.nombre}> {data.nombre} </option>

        }
        ))
        return table
    }

    render() {
        return (
            <div className="leftcontainer ">
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light flex-column">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse flex-column" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto flex-column">
                            <li className="nav-item dropdown">
                                <h2 className="nav-link ">
                                    Servicios        </h2>
                                <div className="dropdown-divider" onClick={() => this.props.consumercontenthandler('consumer_home_page') }></div>
                                <div className="dropdown-divider" onClick={() => this.props.consumercontenthandler('consumer_home_page') }></div>
                                <button className="dropdown-item" onClick={() => this.props.consumercontenthandler('consumer_home_page') }>Guardería</button>
                                <div className="dropdown-divider" onClick={() => this.props.consumercontenthandler('consumer_home_page') } ></div>
                                <button className="dropdown-item" onClick={() => this.props.consumercontenthandler('consumer_home_page') }>Veterinaria</button>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item" onClick={() => this.props.consumercontenthandler('consumer_home_page') }>Paseos</button>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item" onClick={() => this.props.consumercontenthandler('consumer_home_page') } >Saltos</button>


                            </li>

                            <li className="nav-item">
                                <h2 className="nav-link ">Filtros</h2>
                                <div className="dropdown-divider"></div>
                                <div className="dropdown-divider"></div>
                            </li>
                            <li className="nav-item">
                                <h5 className="nav-link " >Ubicación</h5>
                                <div className="input-group">
                                    <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                        <option defaultValue>Seleccione...</option>
                                        {this.createoption()}

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
                                <div className="dropdown-divider"></div>
                            </li>
                        </ul>

                    </div>
                </nav>
                

            </div>
        );
    }
    


}

export { Barra };