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
        filtro: "ninguno",
        filtroname: "Ninguno",
    }

    async componentDidMount() {
        const serviciosDispController = new ServiciosDispController();
        const servicios = await serviciosDispController.readServiciosIniciadosConsumidor();
        this.setState({ servicios: servicios })
    }

    changefilter = (param, param2) => {
        this.setState({
            filtro: param,
            filtroname: param2
        })
    }

    render() {

        let table = [];

        this.state.servicios.map(
            (data, index) => {
                if (this.state.filtro === "ninguno") {
                    table.push(
                        <ServiceCard
                            key={index}
                            //informacion servicio
                            nombre={data.servicio.nombre}
                            img={data.servicio.img}
                            puntuacion={data.servicio.puntuacion}
                            horario={data.servicio.horario}
                            localidad={data.servicio.localidad}
                            barrio={data.servicio.barrio}
                            duracionMax={data.servicio.duracionMax}
                            precio={data.servicio.precio}
                            descripcion={data.servicio.descripcion}
                            type={data.tipo}
                            //informacion persona
                            imgp={data.prestador.foto}
                            nombrep={data.prestador.nombres}
                            apellidosp={data.prestador.apellidos}
                            telefonop={data.prestador.telefono}
                            idConsumidor={data.consumidor.id}
                            idPrestador={data.prestador.id}
                        />)
                } else {
                    if (data.tipo === this.state.filtro) {
                        table.push(
                            <ServiceCard
                            key={index}
                            //informacion servicio
                            nombre={data.servicio.nombre}
                            img={data.servicio.img}
                            puntuacion={data.servicio.puntuacion}
                            horario={data.servicio.horario}
                            localidad={data.servicio.localidad}
                            barrio={data.servicio.barrio}
                            duracionMax={data.servicio.duracionMax}
                            precio={data.servicio.precio}
                            descripcion={data.servicio.descripcion}
                            type={data.tipo}
                            //informacion persona
                            imgp={data.consumidor.foto}
                            nombrep={data.consumidor.nombres}
                            apellidosp={data.consumidor.apellidos}
                            telefonop={data.consumidor.telefono}
                            idConsumidor={data.consumidor.id}
                            idPrestador={data.prestador.id}
                        />
                        )
                    }
                }
            return null;
            }
        );

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="menu-collapse-cons col-12 d-inline d-lg-none textcenter">
                        <h2 className="barra-logo-cons mt-3">Tus Servicios</h2>
                        <h4 className="barra-logo-cons mt-3">Filtro Actual:</h4>
                        <h5 className="TextAltMainColor mt-3">{this.state.filtroname}</h5>
                        <button className="btn btn-info mb-3" data-toggle="collapse" data-target="#bloque2">
                            Gestionar
                        </button>
                        <div className="collapse" id="bloque2">
                            <nav className="d-flex flex-column">
                                <button type="button" className="btn btn-primary mt-3" onClick={() => { this.changefilter("paseo", "Paseos") }}>Paseos</button>
                                <button type="button" className="btn btn-success mt-3" onClick={() => { this.changefilter("veterinaria", "Veterinarias") }}>Veterinarias</button>
                                <button type="button" className="btn btn-danger mt-3" onClick={() => { this.changefilter("guarderia", "Guarderías") }}>Guarderías</button>
                                <button type="button" className="btn btn-warning mt-3" onClick={() => { this.changefilter("salto", "Saltos") }}>Saltos</button>
                                <button type="button" className="btn btn-light mt-3 mb-3" onClick={() => { this.changefilter("ninguno", "Ninguno") }}>Sin Filtro</button>
                            </nav>
                        </div>
                    </div>
                    <div className="barra-lateral-cons col-1 col-lg-2 d-none d-lg-inline textcenter">
                        <h2 className="barra-logo-cons mt-3">Tus Servicios</h2>
                        <h4 className="barra-logo-cons mt-3">Filtro Actual:</h4>
                        <h5 className="TextAltMainColor mt-3">{this.state.filtroname}</h5>
                        <nav className="d-flex flex-column">
                            <button type="button" className="btn btn-primary mt-3" onClick={() => { this.changefilter("paseo", "Paseos") }}>Paseos</button>
                            <button type="button" className="btn btn-success mt-3" onClick={() => { this.changefilter("veterinaria", "Veterinarias") }}>Veterinarias</button>
                            <button type="button" className="btn btn-danger mt-3" onClick={() => { this.changefilter("guarderia", "Guarderías") }}>Guarderías</button>
                            <button type="button" className="btn btn-warning mt-3" onClick={() => { this.changefilter("salto", "Saltos") }}>Saltos</button>
                            <button type="button" className="btn btn-light mt-3" onClick={() => { this.changefilter("ninguno", "Ninguno") }}>Sin Filtro</button>
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