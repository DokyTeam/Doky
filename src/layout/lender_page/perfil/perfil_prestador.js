import React, { Component } from 'react';

import '../../global_css/textcolors.css';
import '../../global_css/colors.css';
import '../../global_css/fonts.css';
import './perfil.css';
import interesesjson from './json/servicios.json';
import { GeneralCards } from './components_perfil/card/generalcard';
import { UserController } from '../../../controllers/user_controller';
import user_image from './images/user-icon.webp'
import { UploadPage } from '../../../components/upload_page/upload_page';
import InformacionBasica from '../../../components/Perfil/informacion_basica'
import Contacto from '../../../components/Perfil/contacto'

class PerfilPrestador extends Component {

    state = {
        userInfo: [],
        uploadimgstate: false,
        percentageImageLoading: 0,
    }

    componentDidMount() {
        this.loadUserInfo()
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

    uploadPageHandler = (value) => {
        this.setState({
            uploadimgstate: value,
            percentageImageLoading: 0
        });
    }

    perfilImghandler = (img) => {
        const userController = new UserController();
        userController.addImagen(
            img,
            percentage => { this.setState({ percentageImageLoading: percentage }) },
            error => { console.log(error) },
            () => {
                this.setState({ percentageImageLoading: 100 })
                this.loadUserInfo();
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
            fotosrc = data.foto || user_image;;
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
            <div>
                {uploadimgstate}
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <br />
                        </div>
                        <InformacionBasica
                            nombre={nombre}
                            appellido={appellido}
                            fecha_nacimiento={fecha_nacimiento}
                            ciudad={ciudad}
                            barrio={barrio}
                            fotosrc={fotosrc}
                            onClick={() =>{this.uploadPageHandler(true)}}
                        />
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
                            <p className="BigTextFont TextDarkMainColor">Contacto Laboral</p>
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
                        <Contacto celular={celular} fijo={fijo} correo1={correo1}/>
                    </div>
                </div>
            </div>
        );
    }
}

export { PerfilPrestador };