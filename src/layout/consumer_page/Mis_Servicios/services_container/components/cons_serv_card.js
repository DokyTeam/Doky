import React from 'react';

import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css';

import './const_serv_card.css'

import { Link } from 'react-router-dom';

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

export default function ServiceCard(props) {

    switch (props.type) {
        case "Paseo":
            return (
                <div className="card">
                    <div className="serv-img-container textcenter">
                        <img className="card-img-top img-fluid image-serv-card" src={props.img} alt={props.nombre} />
                        <h1 className="serv-img-title">{props.nombre}</h1>
                    </div>
                    <div className="card-body textcenter">
                        <h2 className=" card-title TextDarkMainColor mb-0">{props.horario}</h2>
                        <div className="mt-2 mb-2">
                            <fieldset className="val-fieldset" ><legend></legend><span className={estrellas(props.puntuacion)}></span></fieldset>
                        </div>
                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Duración:</p>
                        <h3 >{props.duracionMax}</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 col-md-12 col-lg-6">
                                    <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Localidad:</p>
                                    <p className="MediumTextFont">{props.localidad}</p>
                                </div>
                                <div className="col-6 col-md-12 col-lg-6">
                                    <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Barrio:</p>
                                    <p className="MediumTextFont">{props.barrio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-primary textcenter">
                        <h3 className="mt-0 mb-1 TextWhiteColor">Paseo</h3>
                    </div>
                </div>
            );
        case "Veterinaria":
            return (
                <div className="card">
                    <div className="serv-img-container textcenter">
                        <img className="card-img-top img-fluid image-serv-card" src={props.img} alt={props.nombre} />
                        <h1 className="serv-img-title">{props.nombre}</h1>
                    </div>
                    <div className="card-body textcenter">
                        <h2 className=" card-title TextDarkMainColor mb-0">{props.descripcion}</h2>
                        <div className="mt-2 mb-2">
                            <fieldset className="val-fieldset" ><legend></legend><span className={estrellas(props.puntuacion)}></span></fieldset>
                        </div>
                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Horario:</p>
                        <h3 >{props.horario}</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 col-md-12 col-lg-6">
                                    <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Localidad:</p>
                                    <p className="MediumTextFont">{props.localidad}</p>
                                </div>
                                <div className="col-6 col-md-12 col-lg-6">
                                    <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Barrio:</p>
                                    <p className="MediumTextFont">{props.barrio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-danger textcenter">
                        <h3 className="mt-0 mb-1 TextWhiteColor">Veterianria</h3>
                    </div>
                </div>
            );
        case "Guarderia":
            return (
                <div className="card">
                    <div className="serv-img-container textcenter">
                        <img className="card-img-top img-fluid image-serv-card" src={props.img} alt={props.nombre} />
                        <h1 className="serv-img-title">{props.nombre}</h1>
                    </div>
                    <div className="card-body textcenter">
                        <h2 className=" card-title TextDarkMainColor mb-0">{props.descripcion}</h2>
                        <div className="mt-2 mb-2">
                            <fieldset className="val-fieldset" ><legend></legend><span className={estrellas(props.puntuacion)}></span></fieldset>
                        </div>
                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Precio:</p>
                        <h3 >{props.precio}</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 col-md-12 col-lg-6">
                                    <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Localidad:</p>
                                    <p className="MediumTextFont">{props.localidad}</p>
                                </div>
                                <div className="col-6 col-md-12 col-lg-6">
                                    <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Barrio:</p>
                                    <p className="MediumTextFont">{props.barrio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-success textcenter">
                        <h3 className="mt-0 mb-1 TextWhiteColor">Guardería</h3>
                    </div>
                </div>
            );
        case "Salto":
            return (
                <Link to={{
                    pathname : `/MisServicios/${props.nombre}`,
                    state: { nombre: props.nombre}
                }}>
                    <div className="card">
                        <div className="serv-img-container textcenter">
                            <img className="card-img-top img-fluid image-serv-card" src={props.img} alt={props.nombre} />
                            <h1 className="serv-img-title">{props.nombre}</h1>
                        </div>
                        <div className="card-body textcenter">
                            <h2 className=" card-title TextDarkMainColor mb-0">{props.descripcion}</h2>
                            <div className="mt-2 mb-2">
                                <fieldset className="val-fieldset" ><legend></legend><span className={estrellas(props.puntuacion)}></span></fieldset>
                            </div>
                            <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Precio:</p>
                            <h3 >{props.precio}</h3>
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 col-md-12 col-lg-6">
                                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Localidad:</p>
                                        <p className="MediumTextFont">{props.localidad}</p>
                                    </div>
                                    <div className="col-6 col-md-12 col-lg-6">
                                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Barrio:</p>
                                        <p className="MediumTextFont">{props.barrio}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer bg-warning textcenter">
                            <h3 className="mt-0 mb-1">Salto</h3>
                        </div>
                    </div>
                </Link>
            );
        default:
        // code block
    }
}