import React, { Component } from 'react';
import './landingpage.css';
import pug from "./images/pug.png"
import cat from "./images/gato.png"
import cuy from "./images/cuy.png"
import foto1 from "./images/foto1.jpeg"
import foto2 from "./images/foto2.jpeg"
import foto3 from "./images/foto3.jpeg"
import fire from '../../config/Fire';

class Landingpage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="landingpage">
                    <LeftContent />
                    <RightContent MainContainerhandler={this.props.MainContainerhandler} />
                </div>
                <div className="lowerbar">
                    <h1><a href="https://jestupinanb.wixsite.com/doky" target ="_blank"> NOSOTROS </a></h1>
                    <h1> CONTACTO</h1>
                    <h1> AUXILIAR </h1>
                </div>
            </div>
        );
    }
}

class LeftContent extends Component {
    render() {
        return (
            <div className="leftcontainer">
                <p style={{ fontSize: 22 }}>Conoce a Doky</p>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="1000">
                            <img src={foto1} className="d-block w-100" alt="logo"></img>
                            <div className="carousel-caption d-none d-md-block">
                                <p>Los perros son los amigos mas fieles.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-interval="1000">
                            <img src={foto2} className="d-block w-100" alt="logo"></img>
                            <div className="carousel-caption d-none d-md-block">
                                <p>La naturaleza es nuestro unico recurso.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-interval="1000">
                            <img src={foto3} className="d-block w-100" alt="logo"></img>
                            <div className="carousel-caption d-none d-md-block">
                                <p>Los gatos siempre lo estan viendo todo.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="pugcontainer">
                    <img align="middle" alt="imagen de un gato" title="El PUG" src={pug} width="80px"></img>
                    <div>
                        <h3 style={{ fontSize: 25, textAlign: "center" }}>¿Que es Doky?</h3>
                        <h4 style={{ fontSize: 20, textAlign: "center" }}>Doky es la nueva plataforma que te permitira poder tener a la mano todo lo que tu mascota necesita</h4>
                    </div>
                </div>
            </div>
        );
    }
}

class RightContent extends Component {
    constructor(props) {
        super(props)
        this.state = { isEdit: true }
        this.handler = this.rightcontenthandler.bind(this)
    }
    rightcontenthandler(some) {
        this.setState({
            isEdit: some
        })
    }
    render() {
        return (
            <div className="rightcontainer">
                {(this.state.isEdit) ? <Login rightcontenthandler={this.handler} MainContainerhandler={this.props.MainContainerhandler} /> : <Register rightcontenthandler={this.handler} />}
            </div>
        );
    }
}

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    login(e) {
        console.log(this.state.email + '.');
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error)=>{
            console.log(error);
        });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <p style={{ marginTop: 60 }}>BIENVENIDO</p>
                <img align="middle" alt="imagen de un gato" title="El GATO" src={cat} width="80px"></img>
                <br />
                <br />
                <form>
                    <h6>USUARIO:</h6>
                    <label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <br />
                    <br />
                    <h6>CONTRASEÑA:</h6>
                    <label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <br />
                    <br />
                    <input type="submit" value="INGRESAR" className="button" onClick={this.login} />

                </form>
                <button className="button2" onClick={this.props.rightcontenthandler.bind(this, false)}>REGISTRARSE</button>
            </div>
        );
    }
}

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    signup(event){
        event.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error)=>{
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <p style={{ marginTop: 40 }}>CREA TU NUEVA CUENTA</p>
                <img align="middle" alt="imagen de un gato" title="El CUY" src={cuy} width="80px"></img>
                <br />
                <br />
                <form onSubmit={this.handleSubmit}>
                    <h6>CORREO:</h6>
                    <label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <h6>CONTRASEÑA:</h6>
                    <label >
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <br />
                    <input type="submit" value="CREAR CUENTA" className="button" onClick={this.signup} />

                </form>
                <button onClick={this.props.rightcontenthandler.bind(this, true)} className="button2">VOLVER</button>
            </div>
        );
    }
}


export { Landingpage }; 