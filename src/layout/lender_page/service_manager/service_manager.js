import React, { Component } from 'react';

import '../../global_css/textcolors.css';
import '../../global_css/colors.css';
import '../../global_css/fonts.css';

import './service_manager.css';

import { ServiciosDispController } from '../../../controllers/serviciosDisponibles_controller';
import ServiceCard from './components/service_card';

class ServiceManager extends Component {

    state = {
        servicios: [],
        filtro: "Ninguno",
        eliminar: false
    }

    componentDidMount() {
        this.readAllPaseos();
    }

    readAllPaseos = async () => {
        try {
            var serviciosDispController = new ServiciosDispController();
            const paseos = await serviciosDispController.readServicioSalto();
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

    changeElim = (param) => {
        this.setState({
            eliminar: param
        })
    }

    removefromlist = (param) => {
        let arr = this.state.servicios;
        delete arr[param];
        this.setState({
            servicios: arr
        });
    }

    render() {

        let table = [];
        let butt;

        if (this.state.eliminar) {
            butt = <button type="button" className="btn btn-outline-info mt-3 mb-3" onClick={() => { this.changeElim(false) }}>Cancelar</button>
        } else {
            butt = <button type="button" className="btn btn-outline-danger mt-3 mb-3" onClick={() => { this.changeElim(true) }}>Eliminar</button>
        }

        this.state.servicios.map((data, index) => {
            let elimbut;
            if (this.state.eliminar) {
                elimbut = '.'
            } else {
                elimbut = null;
            }

            if (this.state.filtro === "Ninguno") {
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

                        type={"Salto"}

                        key={index}
                        elimbut={elimbut}
                        id={index}
                        delete={this.removefromlist}
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

                            type={"Salto"}

                            key={index}
                            elimbut={elimbut}
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
                    <div className="menu-collapse-gestor col-12 d-inline d-md-none textcenter">
                        <h2 className="barra-logo-gest mt-3">Gestor de Servicios</h2>
                        <h4 className="barra-logo-gest mt-3">Filtro Actual:</h4>
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
                                <button type="button" className="btn btn-light mt-3" onClick={() => { this.changefilter("Ninguno") }}>Sin Filtro</button>
                                {butt}
                            </nav>
                        </div>
                    </div>
                    <div className="barra-lateral-gestor col-3 col-lg-2 d-none d-md-inline textcenter">
                        <h2 className="barra-logo-gest mt-3">Gestor de Servicios</h2>
                        <h4 className="barra-logo-gest mt-3">Filtro Actual:</h4>
                        <h5 className="TextAltMainColor mt-3">{this.state.filtro}</h5>
                        <nav className="d-flex flex-column">
                            <button type="button" className="btn btn-primary mt-3" onClick={() => { this.changefilter("Paseos") }}>Paseos</button>
                            <button type="button" className="btn btn-success mt-3" onClick={() => { this.changefilter("Veterinarias") }}>Veterinarias</button>
                            <button type="button" className="btn btn-danger mt-3" onClick={() => { this.changefilter("Guarderías") }}>Guarderías</button>
                            <button type="button" className="btn btn-warning mt-3" onClick={() => { this.changefilter("Saltos") }}>Saltos</button>
                            <button type="button" className="btn btn-light mt-3" onClick={() => { this.changefilter("Ninguno") }}>Sin Filtro</button>
                            {butt}
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

export { ServiceManager };