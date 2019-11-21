import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import { ServiciosDispController } from '../../../../controllers/serviciosDisponibles_controller';



class PaseosVisualizar extends Component {
    state = {
        PaseoInfo: []
    }

    componentDidMount() {
        this.loadUserInfo()
    }

    async loadUserInfo() {
        try {
            let InfoSend = [];
            let id_Paseo = this.props.location.state.id;
            console.log(id_Paseo);
            const id = this.props.location.state.id_user;
            var getController = new ServiciosDispController();
            const Info = await getController.readPasesosFullInfo(id, id_Paseo);
            InfoSend.push(Info);
            this.setState({ PaseoInfo: InfoSend });

        } catch (error) {
            console.log(error)
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
        return  "valoracion val-10"
     }
     if (1.5 <= calificacion && calificacion < 2) {
        return  "valoracion val-15"
     }
     if (2 <= calificacion && calificacion < 2.5) {
        return  "valoracion val-20"
     }
     if (2.5 <= calificacion & calificacion < 3) {
        return  "valoracion val-25"
     }
     if (3 <= calificacion & calificacion < 3.5) {
        return  "valoracion val-30"
     }
     if (3.5 <= calificacion & calificacion < 4) {
        return  "valoracion val-35"
     }
     if (4 <= calificacion & calificacion < 4.5) {
        return  "valoracion val-40"
     }
     if (4.5 <= calificacion & calificacion < 5) {
        return  "valoracion val-45"
     }
     if (5 === calificacion) {
        return  "valoracion val-50"
     }
     return "valoracion val-0"
    }

    render() {

        let barrio, descripcion, horario, id, img, localidad, precio, puntuacion, duracion;

        this.state.PaseoInfo.map((data) => {
            barrio = data.barrio;
            descripcion = data.descripcion;
            horario = data.horario;
            id = data.id;
            img = data.img;
            localidad = data.localidad;
            precio = data.precio;
            if(data.puntuacion) 
            {puntuacion= data.puntuacion }
            else{puntuacion = 0}
            duracion = data.duracionMax;

            return null;
        });

        return (
            <div>

                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12">

                        </div>

                        <InformacionBasica


                            fotosrc={img}
                            nombre={id}
                            calificación={puntuacion}
                            precio={precio}
                            horario={horario}
                            localidad={localidad}
                            barrio={barrio}
                            descripcion={descripcion}
                            duracion={duracion}
                            estrellas={this.estrellas(puntuacion)}

                        />
                        }

                    </div>

                    <div className="row">
                        <div className="col-12" style={{ textAlign: "right" }}>
                            <button type="button" className="btn btn-success"
                                style={{ marginRight: 10 }}>
                                Tomar servicio</button>
                            <hr />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export { PaseosVisualizar };


function InformacionBasica(props) {
    return (
        <>

            <div className="col-12 col-md-5 text-center">

                <img className="img_card"
                    src={props.fotosrc}
                    title={props.nombre}
                    alt={props.nombre}
                    style={{
                        padding: "5%",
                        borderRadius: 20,
                        width: "100%",
                        height: "100%"
                    }}
                >
                </img>

            </div>
            <div className="col-12 col-md-7">
                <h1 className="CurvyTextFontBig" style={{ textAlign: "center", letterSpacing: 2 }}>{props.nombre}</h1>
                <hr />
                <p className="MediumTextFont BigTextFont TextDarkMainColor">Información básica</p>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Nombre:</p>
                        <p className="MediumTextFont">{props.nombre}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-md-6">
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
                    <div className="col-12 col-md-6">

                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Precio:</p>
                        <p className="MediumTextFont">{props.precio}</p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-md-6">
                        <p className="ultraSmallTextoFont TextAltMainColor userparamtext">Duración maxima:</p>
                        <p className="MediumTextFont">{props.duracion}</p>
                    </div>

                </div>
                <div className="row">

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
        </>
    );
}