import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import { ServiciosDispController } from '../../../../controllers/serviciosDisponibles_controller';



class VeterinariaVisualizar extends Component {

    state = {
        veterinariaInfo: []
    }

    componentDidMount() {
        this.loadUserInfo()
    }

    async loadUserInfo() {
        try {
            let InfoSend = [];
            let id_veterinaria = this.props.location.state.id;
            
            const id = this.props.location.state.id_user;
            var getController = new ServiciosDispController();
            const Info = await getController.readVeterinariaFullInfo(id, id_veterinaria);
            InfoSend.push(Info);
            this.setState({ veterinariaInfo: InfoSend });

        } catch (error) {
            console.log(error)
        }
    }

    render() {

        let barrio, descripcion, horario, id, img, localidad,  puntuacion;

        this.state.veterinariaInfo.map((data) => {
            barrio = data.barrio;
            descripcion = data.descripcion;
            horario = data.horario;
            id = data.id;
            img = data.img;
            localidad = data.localidad;
            puntuacion = data.puntuacion;

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
                            horario={horario}
                            localidad={localidad}
                            barrio={barrio}
                            descripcion={descripcion}

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

export { VeterinariaVisualizar };

function InformacionBasica(props) {
    return (
        <>
            
            <div className="col-12 col-md-5 ">

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
                        <p className="MediumTextFont">{props.calificación}</p>
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
