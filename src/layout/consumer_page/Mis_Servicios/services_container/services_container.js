import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';

import './services_container.css';

import { ServiciosDispController } from '../../../../controllers/serviciosDisponibles_controller';
import ServiceCard from './components/cons_serv_card';

class ServicesContainer extends Component {

    state = {
        servicios: [],
        filtro: "Ninguno",
    }

    componentDidMount() {
        this.readAllPaseos();
    }

    readAllPaseos = async () => {
        try {
            var serviciosDispController = new ServiciosDispController();
            const paseos = await serviciosDispController.readServicioGuarderia();
            console.log(paseos)
            this.setState({ servicios: paseos });
        } catch (error) {
            console.log(error)
        }
    }

    changefilter = (param) => {
        this.setState({
            filtro: param
        })
    }

    render() {

        let table = [];

        this.state.servicios.map((data, index) => {

            if (this.state.filtro === "Ninguno") {
                table.push(
                    <ServiceCard
                        key={index}
                        //informacion servicio
                        nombre={data.nombre}
                        img={data.img}
                        puntuacion={data.puntuacion}
                        horario={data.horario}
                        localidad={data.localidad}
                        barrio={data.barrio}
                        duracionMax={data.duracionMax}
                        precio={data.precio}
                        descripcion={data.descripcion}
                        type={"Veterinaria"}
                        //informacion persona
                        imgp={'http://lorempixel.com/500/300/'}
                        nombrep={'Juan Pablo'}
                        apellidosp={'Betancourt Maldonado'}
                        telefonop={'3214567890'}
                    />
                )
            } else {
                if (data.type === this.state.filtro) {
                    table.push(
                        <ServiceCard
                            nombre={data.nombre}
                            img={data.img}
                            puntuacion={data.puntuacion}
                            horario={data.horario}
                            localidad={data.localidad}
                            barrio={data.barrio}
                            duracionMax={data.duracionMax}
                            precio={data.precio}
                            descripcion={data.descripcion}

                            type={"Guarderia"}

                            key={index}
                            id={index}
                            delete={this.removefromlist}
                        />
                    )
                }
            }
            return null;
        });

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="menu-collapse-cons col-12 d-inline d-lg-none textcenter">
                        <h2 className="barra-logo-cons mt-3">Tus Servicios</h2>
                        <h4 className="barra-logo-cons mt-3">Filtro Actual:</h4>
                        <h5 className="TextAltMainColor mt-3">{this.state.filtro}</h5>
                        <button className="btn btn-info mb-3" data-toggle="collapse" data-target="#bloque2">
                            Gestionar
                        </button>
                        <div className="collapse" id="bloque2">
                            <nav className="d-flex flex-column">
                                <button type="button" className="btn btn-primary mt-3" onClick={() => { this.changefilter("Paseos") }}>Paseos</button>
                                <button type="button" className="btn btn-success mt-3" onClick={() => { this.changefilter("Veterinarias") }}>Veterinarias</button>
                                <button type="button" className="btn btn-danger mt-3" onClick={() => { this.changefilter("Guarderías") }}>Guarderías</button>
                                <button type="button" className="btn btn-warning mt-3" onClick={() => { this.changefilter("Saltos") }}>Saltos</button>
                                <button type="button" className="btn btn-light mt-3 mb-3" onClick={() => { this.changefilter("Ninguno") }}>Sin Filtro</button>
                            </nav>
                        </div>
                    </div>
                    <div className="barra-lateral-cons col-1 col-lg-2 d-none d-lg-inline textcenter">
                        <h2 className="barra-logo-cons mt-3">Tus Servicios</h2>
                        <h4 className="barra-logo-cons mt-3">Filtro Actual:</h4>
                        <h5 className="TextAltMainColor mt-3">{this.state.filtro}</h5>
                        <nav className="d-flex flex-column">
                            <button type="button" className="btn btn-primary mt-3" onClick={() => { this.changefilter("Paseos") }}>Paseos</button>
                            <button type="button" className="btn btn-success mt-3" onClick={() => { this.changefilter("Veterinarias") }}>Veterinarias</button>
                            <button type="button" className="btn btn-danger mt-3" onClick={() => { this.changefilter("Guarderías") }}>Guarderías</button>
                            <button type="button" className="btn btn-warning mt-3" onClick={() => { this.changefilter("Saltos") }}>Saltos</button>
                            <button type="button" className="btn btn-light mt-3" onClick={() => { this.changefilter("Ninguno") }}>Sin Filtro</button>
                        </nav>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col-12">
                                <div className="card-columns">
                                    {table}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export { ServicesContainer };