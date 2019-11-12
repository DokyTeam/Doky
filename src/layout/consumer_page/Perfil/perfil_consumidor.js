import React, { Component } from 'react';

import '../../global_css/textcolors.css';
import '../../global_css/colors.css';
import '../../global_css/fonts.css';
import './perfil.css';
import interesesjson from './json/intereses.json';
import { GeneralCards } from './components/card/generalcard';
import { UserController } from '../../../controllers/user_controller';
import user_image from './images/user-icon.webp'
import { UploadPage } from './components/upload_page/upload_page';
import fire from '../../../config/Fire';

class Perfil extends Component {

    state = {
        userInfo: [],
        uploadimgstate: false,
        //picture: null,
        percentageImageLoading: 0,
    }

    async loadUserInfo() {
        try {
            let userInfoSend = []
            var userController = new UserController();
            let idUser = userController.getUserId();
            const userInfo = await userController.getInfomracionUsuario(idUser);
            userInfoSend.push(userInfo);
            this.setState({ userInfo: userInfoSend });
            this.uploadPageHandler(false);
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.loadUserInfo()
    }

    uploadPageHandler = (value) => {
        this.setState({
            uploadimgstate: value,
            percentageImageLoading: 0
        });
    }

    perfilImghandler = (img) => {
        let userId = (new UserController()).getUserId();
        const storageRef = fire.storage().ref(`/FotosPerfil/${userId}`);
        const task = storageRef.put(img);

        task.on('state_changed',
            snapshot => {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                this.setState({ percentageImageLoading: percentage })
            },
            error => { console.log(error) },
            async () => {
                try {
                    let url = await task.snapshot.ref.getDownloadURL();
                    await fire.firestore().collection("usuarios").doc(userId).set({ foto: url }, { merge: true })
                    this.setState({ percentageImageLoading: 100 })//, picture: url })
                    this.loadUserInfo();
                } catch (error) {
                    console.log(error);
                }
            }
        )
    }

    render() {

        let nombre, appellido, celular, fijo, fecha_nacimiento, ciudad, barrio, correo1, fotosrc;
        let interesesname = interesesjson.nombre, interesarr = interesesjson.intereses;

        this.state.userInfo.map((data) => {
            nombre = data.nombres;
            appellido = data.apellidos;
            celular = data.celular;
            fijo = data.telefono;
            fecha_nacimiento = data.fecha;
            ciudad = data.ciudad;
            barrio = data.barrio;
            correo1 = data.correo;
            fotosrc = data.foto || user_image;
            return null;
        });

        let cardlist = [];
        cardlist.push(interesarr.map((data, index) => {
            return <GeneralCards text={data} key={index} />
        }));

        let uploadimgstate;

        if (this.state.uploadimgstate) {
            uploadimgstate =
                <UploadPage
                    percentageImageLoading={this.state.percentageImageLoading}
                    onClickCancelar={() => this.uploadPageHandler(false)}
                    foto={fotosrc}
                    onClickActualizar={(img) => this.perfilImghandler(img)}
                />
        }

        return (
            <>
                <div className="container-fluid" style={{padding:"0"}}>
                {uploadimgstate}
                    <div className="row align-items-center">
                        <div className="col-12">
                            <h1 className="MediumTextFont perftext">Perfil</h1>
                            <hr />
                        </div>

                        <div className="col-12 col-md-5 text-center">
                            <div className="show-image">
                                <img className="consusmerimg"
                                    src={fotosrc}
                                    title={nombre}
                                    alt={nombre}
                                >
                                </img>
                                <div className="hover-img"
                                    onClick={() => { this.uploadPageHandler(true) }}
                                >
                                    <h1 className="place-text h2"><strong>Cambiar</strong></h1>
                                </div>
                            </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export { Perfil };