import React, { Component } from 'react';
import './consumer_upper_bar.css';
import shop from './images/shop.png';
import '../../global_css/colors.css';
import {LoginController} from '../../../controllers/login_controller'
class ConsumerUpperbar extends Component {

    constructor(props){
        super(props);
        // We will use the LoginController for signing out, so I'll add it to this class
        this.loginController = new LoginController();
        this.logout = this.logout.bind(this);
    }

    // This method is executed once the user clicks on the "shop icon".
    logout(){
        // We will use the log out method provided by our LoginController
        this.loginController.logOut();
    }

    render() {
        return (
            <div className="Navegation">
                <div className="d-flex bd-highlight MainColor align-items-center">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => this.props.consumercontenthandler('consumer_home_page')}>
                        <h1 className="text-light  text-font font-italic text-uppercase ">
                            doky
                        </h1>
                    </button>
                    <div className="p-2 bd-highlight"><input className="form-control mr-sm-1 d-none d-sm-block font-weight-bolder" type="search" placeholder="Buscar" aria-label="Search"></input>
                    </div>
                    <div className="p-2 bd-highlight"><button className=" btn btn-outline-light my-2 my-sm-0 d-none d-sm-block font-weight-bolder" type="submit">Buscar</button>
                    </div>
                    <div className="ml-auto p-2 bd-highlight marginCard">

                        <div className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">
                                <img src={shop} className="justify-content-end logo-size" alt="logo" ></img>
                            </div>
                            <div className="dropdown-menu  ">
                                <button onClick={this.logout} className="dropdown-item" style={{ border: 'none' }}>
                                    Cerrar sesion
                                </button>
                                <div className="dropdown-divider"></div>
                                <button onClick={() => this.props.consumercontenthandler('perfil')} className="dropdown-item" style={{ border: 'none' }}>
                                    Mi Perfil
                                </button>
                                <div className="dropdown-divider"></div>
                                <button onClick={() => this.props.consumercontenthandler('mis_mascotas')} className="dropdown-item" style={{ border: 'none' }}>
                                    Mis Mascotas
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export { ConsumerUpperbar }; 