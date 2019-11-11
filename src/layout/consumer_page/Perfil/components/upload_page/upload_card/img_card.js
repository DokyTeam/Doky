import React, { Component } from 'react';
import './img_card.css';
import img from '../../../images/user-icon.webp';

class ImageCard extends Component {
    state = {
        imageurl: this.props.userinfo[0].foto || img,
        imagefile: null
    }

    fileselectedhandler = event => {
        if (event.target.files[0]) {
            this.setState({
                imageurl: URL.createObjectURL(event.target.files[0]),
                imagefile: event.target.files[0]
            });
        }
    }

    fileuploadhandler = () => {
        //aqui llamen al controlador para actualizar la imagen de la persona
        return null;
    }

    render() {
        return (
            <div className="maincard">
                <div className="card text-center">
                    <div className="card-body">
                        <h3 className="card-title">Seleccione una Imagen de su Ordenador</h3>
                        <br />
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="customFileLang" lang="es" onChange={this.fileselectedhandler} />
                            <label className="custom-file-label" htmlFor="customFileLang">Seleccionar Archivo</label>
                        </div>
                        <br />
                        <br />
                        <img className="uploadimg" src={this.state.imageurl} alt="" />
                        <br />
                        <br />
                        <button type="button" className="btn btn-outline-warning" onClick={() => {
                            let x = this.props.userinfo;
                            x[0].foto = this.state.imageurl;
                            this.fileuploadhandler();
                            this.props.perfilconsumidorhandler(x,false);
                        }}>Actualizar</button>
                        <br />
                        <br />
                        <button type="button" className="btn btn-outline-danger" onClick={() => {this.props.uploadimgpagehandler(false)}}>Cancelar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export { ImageCard };