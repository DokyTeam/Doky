import React, { Component } from 'react';

import '../../global_css/textcolors.css';
import '../../global_css/colors.css';
import '../../global_css/fonts.css';
import './perfil.css';
import perfil_json from './json/perfil.json';
import interesesjson from './json/intereses.json';
import { GeneralCards } from './card/generalcard';

class Perfil extends Component {

    render() {

        let nombre, appellido, celular, fijo, fecha_nacimiento, ciudad, barrio, correo1, correo2, fotosrc;
        let interesesname = interesesjson.nombre, interesarr = interesesjson.intereses;

        perfil_json.map((data) => {
            nombre = data.nombre;
            appellido = data.apellido;
            celular = data.celular;
            fijo = data.fijo;
            fecha_nacimiento = data.fecha_nacimiento;
            ciudad = data.ciudad;
            barrio = data.barrio;
            correo1 = data.correo1;
            correo2 = data.correo2;
            fotosrc = data.foto;
            return null;
        });

        let cardlist = [];
        cardlist.push(interesarr.map((data, index) => {
            return <GeneralCards text={data} key={index} />
        }));

        return (
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-12">
                        <h1 className="MediumTextFont perftext">Perfil</h1>
                        <hr />
                    </div>
                    <div className="col-12 col-md-5">
                        <img className="userimg" src={fotosrc} title={nombre} alt={nombre}></img>
                    </div>
                    <div className="col-12 col-md-7">
                        <p className="MediumTextFont BigTextFont TextDarkMainColor">Información básica</p>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Nombre:</p>
                                <p className="MediumTextFont">{nombre}</p>
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Apellido:</p>
                                <p className="MediumTextFont">{appellido}</p>
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Fecha de nacimiento:</p>
                                <p className="MediumTextFont">{fecha_nacimiento}</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Ciudad:</p>
                                <p className="MediumTextFont">{ciudad}</p>
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Barrio:</p>
                                <p className="MediumTextFont">{barrio}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12"><hr /></div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 d-block d-sm-none">
                        <p className="BigTextFont TextDarkMainColor">{interesesname}</p>
                    </div>
                    <div className="col-12 col-md-5 textcenter d-none d-sm-block">
                        <p className="BigTextFont TextDarkMainColor">{interesesname}</p>
                    </div>
                    <div className="col-12 col-md-7 d-none d-sm-block">
                        <p className="BigTextFont TextDarkMainColor">Contacto</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 col-md-5 d-block d-md-none">
                        <div className="textcenter">
                            {cardlist}
                        </div>
                    </div>
                    <div className="col-12 col-md-5 textcenter d-none d-md-block">
                        {cardlist}
                    </div>
                    <div className="col-12 col-md-7">
                        <p className="BigTextFont TextDarkMainColor d-block d-sm-none">Contacto</p>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Celular:</p>
                                <p className="SmallTextFont">{celular}</p>
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Teléfono:</p>
                                <p className="SmallTextFont">{fijo}</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Correo Principal:</p>
                                <p className="SmallTextFont">{correo1}</p>
                                <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Correo Secundario:</p>
                                <p className="SmallTextFont">{correo2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Perfil };