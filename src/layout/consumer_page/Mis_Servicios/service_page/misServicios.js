import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';

import './misServicios.css'

import { Chat } from './chat';
import { Start } from './start';

class MisServicios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            background: "container-fluid",
            show_start: false
        }
    }

    estrellas = (calificacion) => {

        if (0 < calificacion && calificacion < 0.5) {
            return "valoracion val-0"
        }
        if (0.5 <= calificacion && calificacion < 1) {
            return "valoracion val-5"
        }
        if (1 <= calificacion && calificacion < 1.5) {
            return "valoracion val-10"
        }
        if (1.5 <= calificacion && calificacion < 2) {
            return "valoracion val-15"
        }
        if (2 <= calificacion && calificacion < 2.5) {
            return "valoracion val-20"
        }
        if (2.5 <= calificacion & calificacion < 3) {
            return "valoracion val-25"
        }
        if (3 <= calificacion & calificacion < 3.5) {
            return "valoracion val-30"
        }
        if (3.5 <= calificacion & calificacion < 4) {
            return "valoracion val-35"
        }
        if (4 <= calificacion & calificacion < 4.5) {
            return "valoracion val-40"
        }
        if (4.5 <= calificacion & calificacion < 5) {
            return "valoracion val-45"
        }
        if (5 === calificacion) {
            return "valoracion val-50"
        }
        return "valoracion val-0"
    }

    handle = (someB, someS) => {
        this.setState({
            background: someB,
            show_start: someS
        })
    }

    render() {



        return (
            <div>

                <div className={this.state.background}>
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-5" >
                            <div className="WhiteColor card ContainerInfo">
                                <br></br>
                                <InformacionBasicaServicio

                                    fotosrc={this.props.img}
                                    nombre={this.props.nombre}
                                    calificación={this.props.puntuacion}
                                    precio={this.props.precio}
                                    horario={this.props.horario}
                                    localidad={this.props.localidad}
                                    barrio={this.props.barrio}
                                    descripcion={this.props.descripcion}
                                    duracion={this.props.duracion}
                                    estrellas={this.estrellas(this.props.puntuacion)}

                                />
                                <br></br>
                                <Start show={this.state.show_start} volver={this.handle}></Start>
                                <button type="button" className="btn btn-outline-danger" onClick={() => {
                                    this.handle("container-fluid backdrop-consumer", true)

                                }}
                                    style={{
                                        margin: "20%",
                                        marginBottom: "5%",
                                        marginTop: "5%"
                                    }}
                                >Finalizar servicio </button>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-6"  >
                            <div className="WhiteColor card ContainerInfo">
                                <br></br>
                                <InformacionBasicaPerfil
                                    nombre={this.props.nombre}
                                    appellido={this.props.appellido}
                                    fecha_nacimiento={this.props.fecha_nacimiento}
                                    ciudad={this.props.ciudad}
                                    barrio={this.props.barrio}
                                    fotosrc={this.props.fotosrc}
                                    celular={this.props.celular}
                                    fijo={this.props.fijo}
                                    correo1={this.props.correo1}

                                />
                            </div>
                            <div className="WhiteColor card ContainerInfo">
                                <Chat></Chat>
                                <br></br>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export { MisServicios };

function InformacionBasicaServicio(props) {


    return (
        <>

            <div className="container-fluid ">
                <div className="row">


                    <div className="col-12 col-md-12">


                        <div className="row">
                            <div className="col-6 col-md-12 text-center">
                                <div className="show-image">
                                    <img className="consusmerimg"
                                        src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"
                                        title={props.nombre}
                                        alt={props.nombre}
                                    >
                                    </img>

                                </div>
                            </div>
                            <div className="col-12 col-md-12">
                                <p className="MediumTextFont BigTextFont TextDarkMainColor ">Información Servicio</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Nombre:</p>
                                <p className="MediumTextFont">{props.nombre}</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Calificación:</p>
                                <div className="row">

                                    <div className="col-1 col-md-1 col-sm-1">
                                        <p className="MediumTextFont">{props.calificación}</p>
                                    </div>
                                    <div className="col-6 col-md-6 col-sm-6">
                                        <fieldset className="val-fieldset" ><legend></legend><span className={props.estrellas}></span></fieldset>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-6">

                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Precio:</p>
                                <p className="MediumTextFont">{props.precio}</p>

                            </div>
                            <div className="col-12 col-md-6">

                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Horario:</p>
                                <p className="MediumTextFont">{props.horario}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">

                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Localidad:</p>
                                <p className="MediumTextFont">{props.localidad}</p>

                            </div>
                            <div className="col-12 col-md-6">

                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Barrio:</p>
                                <p className="MediumTextFont">{props.barrio}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">

                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Descripción:</p>
                                <p className="MediumTextFont">{props.descripcion}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function InformacionBasicaPerfil(props) {
    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-12 col-md-12">


                        <div className="row">
                            <div className="col-12 col-md-6 text-center">
                                <div className="show-image">
                                    <img className="consusmerimg"
                                        src="https://ichef.bbci.co.uk/news/660/cpsprodpb/A020/production/_103529904_primera.jpg"
                                        title={props.nombre}
                                        alt={props.nombre}
                                    >
                                    </img>

                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="MediumTextFont BigTextFont TextDarkMainColor">Información Prestador</p>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Nombre:</p>
                                        <p className="MediumTextFont">{props.nombre}</p>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Apellido:</p>
                                        <p className="MediumTextFont">{props.appellido}</p>
                                    </div>

                                    

                                    <div className="col-12 col-md-6">
                                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Celular:</p>
                                        <p className="SmallTextFont">{props.celular}</p>
                                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Teléfono:</p>
                                        <p className="SmallTextFont">{props.fijo}</p>
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Correo:</p>
                                        <p className="SmallTextFont">{props.correo1}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

