import React, { Component } from 'react';
import './landingpage.css';
import '../../global_css/colors.css';
import '../../global_css/fonts.css';
import '../../global_css/textcolors.css';
import pug from "./images/pug.png";
import cat from "./images/gato.png";
import cuy from "./images/cuy.png";
import foto1 from "./images/foto1.jpeg";
import foto2 from "./images/foto2.jpeg";
import foto3 from "./images/foto3.jpeg";
import { LoginController } from '../../../controllers/login_controller';
import { LocalidadesController } from '../../../controllers/localidades_controller';

class Landingpage extends Component {

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-9">
                            <LeftContent />
                        </div>
                        <div className="col-md-12 col-lg-3">
                            <RightContent MainContainerhandler={this.props.MainContainerhandler} />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="lowerbar TextMainColor TitleTextFont">
                    <p><a className="TextMainColor TitleTextFont" href="https://jestupinanb.wixsite.com/doky" target="_blank" rel="noopener noreferrer"> NOSOTROS </a></p>
                    <p> CONTACTO</p>
                    <p> AUXILIAR </p>
                </div>
            </div>
        );
    }
}

class LeftContent extends Component {
    render() {
        return (
            <div className="leftcontainer">
                <p className="TitleTextFont textcenter" style={{ fontSize: 33 }}>Conoce a Doky</p>
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
                                <p>Los perros son los amigos más fieles.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-interval="1000">
                            <img src={foto2} className="d-block w-100" alt="logo"></img>
                            <div className="carousel-caption d-none d-md-block">
                                <p>La naturaleza es nuestro único recurso.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-interval="1000">
                            <img src={foto3} className="d-block w-100" alt="logo"></img>
                            <div className="carousel-caption d-none d-md-block">
                                <p>Los gatos siempre lo están viendo todo.</p>
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
                <div className="container-fluid">
                    <div className="row align-items-center AltBackgroundColor">
                        <div className="col-sm-12 col-lg-2 textcenter">
                            <img align="middle" alt="imagen de un gato" title="El PUG" src={pug} width="80px"></img>
                        </div>
                        <div className="col-sm-12 col-lg-10">
                            <div>
                                <h3 style={{ fontSize: 25, textAlign: "center" }}>¿Qué es Doky? </h3>
                                <h4 style={{ fontSize: 20, textAlign: "center" }}>Doky es la nueva plataforma que te permitirá poder tener a la mano todo lo que tu mascota necesita</h4>
                            </div>
                        </div>
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

//ESTO NO DEBE ESTAR ACA SOLO ES DE EJEMPLO ELIMINAR
//Funcion encargada de dibujar las localidades y los barrios
function LocalidadesBarriosFromDataBase(props) {
    //Este codigo es puro JSX asi que no esta comentado
    return (
        <>
            {
                props.localidades.map(
                    localidad => (
                        <React.Fragment key={localidad.localidad}>
                        <h1 >{localidad.localidad}</h1>
                        <ul style={{padding:"0"}}>
                        {
                            localidad.barrios.map(
                                barrio => (
                                    <li key={barrio} className="list-group-item">
                                        {barrio}
                                    </li>
                                )
                            )
                        }
                        </ul>
                        </React.Fragment>
                    )
                )
            }
        </>
    )
}

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            localidades: [],
        }
        // We will use the LoginController for authentication, so I'll add it to this class
        this.loginController = new LoginController();
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.localidadesController = new LocalidadesController();
    }

    // This method will happen once the user clicks on "INGRESAR"
    login(e) {
        // We prevent the default cases so avoid submitting the form
        e.preventDefault();
        // Here we will use the method in the controller for signing in
        // That method will be the responsible for start a session into the browser's cookies,
        // so we don't need any more for checking if the auth was successful
        this.loginController.signInWithEmailAndPassword(this.state.email, this.state.password);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    //ESTO NO DEBE ESTAR ACA SOLO ES DE EJEMPLO
    //ELIMINAR
    getLocalidades = () => {
        this.localidadesController.readLocalidadesyBarrios().then(
            localidades => {
                console.log(localidades);
                this.setState({ localidades: localidades })
            }
        )
    }

    // TODO: There is a bug when you put the incorrect password but the email is correct, then when you
    // put your password again, and it is the correct, the app keeps taking an incorrect password.
    // NOTE: I just notice that the session is opened, but you have to press F5.
    // To be honest I don't understand very good when the bug happens =(
    render() {
        return (
            <div>
                <p className="TitleTextFont" style={{ marginTop: 30, fontSize: 25 }}>BIENVENIDO</p>
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
                    <input type="submit" value="INGRESAR" className="button MainColor TextWhiteColor" onClick={this.login} />

                </form>
                <button className="button2 DarkMainColor TextWhiteColor" onClick={this.props.rightcontenthandler.bind(this, false)}>REGISTRARSE</button>
                <br />
                <button className="button2 DarkMainColor TextWhiteColor" onClick={this.props.MainContainerhandler.bind(this, false)}>*</button>
                <br />
                {/**ESTO NO DEBE ESTAR ACA SOLO ES DE EJEMPLO ELIMINAR */}
                <button className="button2 DarkMainColor TextWhiteColor" onClick={() => this.getLocalidades()}>Obtener localidades</button>,
                <LocalidadesBarriosFromDataBase localidades={this.state.localidades} />
                {/** Eliminar hasta aca */}
            </div>
        );
    }
}

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            role: 'Consumidor'
        }
        // We will use the LoginController for registration, so I'll add it to this class
        this.loginController = new LoginController();
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    // This method will happen once the user clicks on "CREAR CUENTA"
    signup(event) {
        // We prevent the default cases so avoid submitting the form
        event.preventDefault();
        // Here we will use the method in the controller for signing up
        // That method will be the responsible for start a session into the browser's cookies once the user
        // is created, so we don't need any more for checking if the auth was successful
        this.loginController.createAccountWithEmailAndPassword(this.state.email, this.state.password);
    }

    render() {
        return (
            <div>
                <p className="TitleTextFont" style={{ marginTop: 40 }}>CREA TU NUEVA CUENTA</p>
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
                    <h6>ROL:</h6>
                    <select className="theselect" name="role" value={this.state.role} onChange={this.handleChange}>
                        <option value='Consumidor'>Consumidor</option>
                        <option value="Prestador">Prestador</option>
                    </select>
                    <br />
                    <br />
                    <input type="submit" value="CREAR CUENTA" className="button MainColor TextWhiteColor" onClick={this.signup} />
                </form>
                <button onClick={this.props.rightcontenthandler.bind(this, true)} className="button2 DarkMainColor TextWhiteColor">VOLVER</button>
            </div>
        );
    }
}

export { Landingpage }; 