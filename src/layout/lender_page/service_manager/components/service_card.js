import React from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';

import { ServiciosDispController } from '../../../../controllers/serviciosDisponibles_controller';

import './service_cards.css'

let estrellas = (calificacion) => {

    if (0 < calificacion && calificacion < 0.5) {
        return "valoracion val-0 estrellitascenter"
    }
    if (0.5 <= calificacion && calificacion < 1) {
        return "valoracion val-5 estrellitascenter"
    }
    if (1 <= calificacion && calificacion < 1.5) {
        return "valoracion val-10 estrellitascenter"
    }
    if (1.5 <= calificacion && calificacion < 2) {
        return "valoracion val-15 estrellitascenter"
    }
    if (2 <= calificacion && calificacion < 2.5) {
        return "valoracion val-20 estrellitascenter"
    }
    if (2.5 <= calificacion & calificacion < 3) {
        return "valoracion val-25 estrellitascenter"
    }
    if (3 <= calificacion & calificacion < 3.5) {
        return "valoracion val-30 estrellitascenter"
    }
    if (3.5 <= calificacion & calificacion < 4) {
        return "valoracion val-35 estrellitascenter"
    }
    if (4 <= calificacion & calificacion < 4.5) {
        return "valoracion val-40 estrellitascenter"
    }
    if (4.5 <= calificacion & calificacion < 5) {
        return "valoracion val-45 estrellitascenter"
    }
    if (5 === calificacion) {
        return "valoracion val-50 estrellitascenter"
    }
    return "valoracion val-0 estrellitascenter"
}

let deleteserv = (tipo, nombre) => {
    var serviciosDispController = new ServiciosDispController();
    serviciosDispController.deleteServicio(nombre, tipo);
}

export default function ServiceCard(props) {

    let but;
    let header;

    if (props.elimbut !== null) {
        but = <button type="button" className="btn btn-danger mt-3" onClick={() => { props.delete(props.id); deleteserv(props.type, props.idn) }}>Eliminar</button>
    }

    if (props.img === "" || props.img === null) {
        header = <div class="card-header textcenter">
            <h1 className="TextAltMainColor">{props.nombre}</h1>
        </div>;
    } else {
        header = <div className="serv-img-container textcenter">
            <img className="card-img-top img-fluid image-serv-card" src={props.img} alt={props.nombre} />
            <h1 className="serv-img-title">{props.nombre}</h1>
        </div>;
    }

    switch (props.type) {
        case "paseo":
            return (
                <div className="card">
                    {header}
                    <div className="card-body textcenter">
                        <h2 className=" card-title TextDarkMainColor mb-0">{props.horario}</h2>
                        <div className="mt-3 mb-2">
                            <fieldset className="val-fieldset" ><legend></legend><span className={estrellas(props.puntuacion)}></span></fieldset>
                        </div>
                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Duración:</p>
                        <h3 >{props.duracionMax}</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 col-sm-12 col-lg-6">
                                    <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Localidad:</p>
                                    <p className="MediumTextFont">{props.localidad}</p>
                                </div>
                                <div className="col-6 col-sm-12 col-lg-6">
                                    <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Barrio:</p>
                                    <p className="MediumTextFont">{props.barrio}</p>
                                </div>
                            </div>
                        </div>
                        {but}
                    </div>
                    <div className="card-footer bg-primary textcenter">
                        <h3 className="mt-0 mb-1 TextWhiteColor">Paseo</h3>
                    </div>
                </div>
            );
        case "veterinaria":
            return (
                <div className="card">
                     {header}
                    <div className="card-body textcenter">
                        <h4 className=" card-title TextDarkMainColor mb-0">{props.descripcion}</h4>
                        <div className="mt-3 mb-2">
                            <fieldset className="val-fieldset" ><legend></legend><span className={estrellas(props.puntuacion)}></span></fieldset>
                        </div>
                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Horario:</p>
                        <h3 >{props.horario}</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 col-sm-12 col-lg-6">
                                    <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Localidad:</p>
                                    <p className="MediumTextFont">{props.localidad}</p>
                                </div>
                                <div className="col-6 col-sm-12 col-lg-6">
                                    <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Barrio:</p>
                                    <p className="MediumTextFont">{props.barrio}</p>
                                </div>
                            </div>
                        </div>
                        {but}
                    </div>
                    <div className="card-footer bg-success textcenter">
                        <h3 className="mt-0 mb-1 TextWhiteColor">Veterinaria</h3>
                    </div>
                </div>
            );
        case "guarderia":
            return (
                <div className="card">
                     {header}
                    <div className="card-body textcenter">
                        <h4 className=" card-title TextDarkMainColor mb-0">{props.descripcion}</h4>
                        <div className="mt-3 mb-2">
                            <fieldset className="val-fieldset" ><legend></legend><span className={estrellas(props.puntuacion)}></span></fieldset>
                        </div>
                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Precio:</p>
                        <h3 >{props.precio}</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 col-sm-12 col-lg-6">
                                    <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Localidad:</p>
                                    <p className="MediumTextFont">{props.localidad}</p>
                                </div>
                                <div className="col-6 col-sm-12 col-lg-6">
                                    <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Barrio:</p>
                                    <p className="MediumTextFont">{props.barrio}</p>
                                </div>
                            </div>
                        </div>
                        {but}
                    </div>
                    <div className="card-footer bg-danger textcenter">
                        <h3 className="mt-0 mb-1 TextWhiteColor">Guardería</h3>
                    </div>
                </div>
            );
        case "salto":
            return (
                <div className="card">
                     {header}
                    <div className="card-body textcenter">
                        <h4 className=" card-title TextDarkMainColor mb-0">{props.descripcion}</h4>
                        <div className="mt-3 mb-2">
                            <fieldset className="val-fieldset" ><legend></legend><span className={estrellas(props.puntuacion)}></span></fieldset>
                        </div>
                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Precio:</p>
                        <h3 >{props.precio}</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 col-sm-12 col-lg-6">
                                    <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Localidad:</p>
                                    <p className="MediumTextFont">{props.localidad}</p>
                                </div>
                                <div className="col-6 col-sm-12 col-lg-6">
                                    <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Barrio:</p>
                                    <p className="MediumTextFont">{props.barrio}</p>
                                </div>
                            </div>
                        </div>
                        {but}
                    </div>
                    <div className="card-footer bg-warning textcenter">
                        <h3 className="mt-0 mb-1">Salto</h3>
                    </div>
                </div>
            );
        default:
        // code block
    }
}
