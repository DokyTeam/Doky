import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import background from './images/background.webp';
import defaultimg from './images/defaultimg.webp';

import { NavigationSideBar } from '../navigation_side_bar/navigation_side_bar';
import { UploadPage } from '../../../../components/upload_page/upload_page';

import { LocalidadesController } from '../../../../controllers/localidades_controller';
import { ServiciosDispController } from '../../../../controllers/serviciosDisponibles_controller';

class PaseosPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            horario: "",
            localidad: "",
            barrio: "",
            duracionMax: "",
            descripcion: "",
            precio: "",
            imageurl: defaultimg,
            imagefile: "",
            localidades: [],
            uploadimgstate: false,
            percentageImageLoading: "none",
            mensaje: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        try {
            let localidadesController = new LocalidadesController();
            const localidades = await localidadesController.readLocalidadesyBarrios();
            this.setState({ localidades: localidades })
        } catch (error) {
            console.log("ha ocurrido un error")
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });

    }

    uploadPageHandler = (value) => {
        this.setState({
            uploadimgstate: value,
        });
    }

    removeMessage = () => {
        this.setState({
            mensaje: null,
            percentageImageLoading: "none",
        });
    }

    perfilImghandler = (img) => {
        if (img) {
            this.setState({
                imagefile: img,
                imageurl: URL.createObjectURL(img),
                uploadimgstate: false,
            });
        }
    }

    createService = () => {
        let Paseo = {
            nombre: this.state.nombre,
            barrio: this.state.barrio,
            descripcion: this.state.descripcion,
            duracionMax: this.state.duracionMax,
            horario: this.state.horario,
            img: "",
            localidad: this.state.localidad,
            precio: this.state.precio
        }
        let img = this.state.imagefile;

        const serviciosDispController = new ServiciosDispController();
        serviciosDispController.writeServicioPaseo(Paseo,
            img,
            percentage => { this.setState({ percentageImageLoading: percentage }) },
            error => { console.log(error) },
            (url) => {
                console.log("URL de la imagen")
                console.log(url)
            },
        )
        this.setState({
            percentageImageLoading: "none",
            mensaje: "Paseo creado Exitosamente!!!",
            nombre: "",
            barrio: "",
            descripcion: "",
            horario: "",
            localidad: "",
            precio: "",
            duracionMax: ""
        })

    }

    getlocalidades = (localidades) => {
        let table = [];
        table.push(
            localidades.map(
                localidad => (
                    <option value={localidad.localidad} key={localidad.localidad} >{localidad.localidad}</option>
                )
            )
        )
        return table;
    }

    getbarrios = (localidades) => {
        let table = [];
        localidades.map(
            localidad => {
                if (localidad.localidad === this.state.localidad) {
                    table.push(
                        localidad.barrios.map(
                            barrio => {
                                return <option value={barrio} key={barrio} >{barrio}</option>
                            }
                        )
                    )
                    return null;
                } else {
                    return null;
                }
            }
        )
        return table;
    }

    render() {
        let uploadimgstate;

        if (this.state.uploadimgstate) {
            uploadimgstate =
                <UploadPage
                    onClickCancelar={() => this.uploadPageHandler(false)}
                    foto={this.state.imageurl}
                    onClickActualizar={(img) => this.perfilImghandler(img)}
                />
        }

        let uploadbar;

        if (this.state.percentageImageLoading !== "none") {
            uploadbar =
                <div className="progress" style={{ width: "100%" }}>
                    <div
                        className="progress-bar progress-bar-striped bg-success"
                        role="progressbar"
                        style={{ width: this.state.percentageImageLoading + "%" }}
                        aria-valuenow="25" aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
        }

        let mensaje;

        if (this.state.mensaje) {
            mensaje =
                <div className="alert alert-success" role="alert">
                    {this.state.mensaje}
                </div>
        }

        return (
            <div>
                {uploadimgstate}
                <img src={background} id="bg" alt="" />
                <NavigationSideBar
                    menucolor="##09529a"
                />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 textcenter">
                            <h1 className="text-center mb-4" style={{ color: '#09529a' }}>
                                <strong>Paseos</strong>
                            </h1>
                            <img className="consusmerimg mb-4" src={this.state.imageurl} alt="" />
                            <div className="mb-2" onClick={() => this.removeMessage()}>
                                {mensaje}
                                {uploadbar}
                            </div>
                            <h2 className="TextWhiteColor text-center">
                                Completa el siguiente formulario para tus ofertas de trabajo como paseador de perros aumenten como nunca lo han hecho.
                            </h2>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card textcenter mb-5">
                                <div className="card-body">
                                    <h2 className=" card-title TextDarkMainColor mb-3">Formulario</h2>
                                    <form>
                                        <div className="input-group mb-2 loginandregisterinput">
                                            <input
                                                type="text"
                                                name="nombre"
                                                value={this.state.nombre}
                                                onChange={this.handleChange}
                                                className="form-control" placeholder="Nombre"
                                                aria-label="Nombre"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                        <br />
                                        <div className="input-group mb-2 loginandregisterinput">
                                            <input
                                                type="text"
                                                name="horario"
                                                value={this.state.horario}
                                                onChange={this.handleChange}
                                                className="form-control" placeholder="Horario"
                                                aria-label="Horario"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                        <br />
                                        <div className="input-group mb-2 loginandregisterinput">
                                            <input
                                                type="text"
                                                name="duracionMax"
                                                value={this.state.duracionMax}
                                                onChange={this.handleChange}
                                                className="form-control" placeholder="Duración Paseo"
                                                aria-label="Duración Paseo"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                        <br />
                                        <div className="input-group mb-4 loginandregisterinput">
                                            <select
                                                className="form-control"
                                                name="localidad"
                                                value={this.state.localidad}
                                                onChange={this.handleChange}
                                            >
                                                <option defaultValue>Localidad...</option>
                                                {this.getlocalidades(this.state.localidades)}
                                            </select>
                                        </div>
                                        <div className="input-group mb-4 loginandregisterinput">
                                            <select
                                                className="form-control"
                                                name="barrio"
                                                value={this.state.barrio}
                                                onChange={this.handleChange}
                                            >
                                                <option defaultValue>Barrio...</option>
                                                {this.getbarrios(this.state.localidades)}
                                            </select>
                                        </div>
                                        <div className="input-group  mb-4 loginandregisterinput">
                                            <textarea
                                                className="form-control"
                                                rows="2"
                                                placeholder="Descripción"
                                                name="descripcion"
                                                value={this.state.descripcion}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="input-group loginandregisterinput">
                                            <input
                                                type="number"
                                                name="precio"
                                                value={this.state.precio}
                                                onChange={this.handleChange}
                                                className="form-control" placeholder="Precio"
                                                aria-label="Precio"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </form>
                                    <br />
                                    <button
                                        type="button"
                                        className="btn btn-outline-success mb-3"
                                        onClick={() => { this.uploadPageHandler(true) }}
                                    >
                                        Subir Imagen
                                    </button>
                                    <br />
                                    <button
                                        type="button"
                                        className="btn btn-outline-warning"
                                        onClick={() => { this.createService() }}
                                    >
                                        Crear
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { PaseosPage };