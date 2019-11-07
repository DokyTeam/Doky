import React, { Component } from 'react';
import './landing_upper_bar.css';
import '../../global_css/colors.css';
import { Link } from 'react-router-dom';

class LandingUpperBar extends Component {

    render() {
        return (
            <div className="Navegation LandingBar">
                <div className="bd-highlight MainColor">
                    <div className="container-fluid ">
                        <div className="row align-items-center">
                            <div className="col-1">
                                <Link to="/">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <h1 className="text-light  text-font font-italic text-uppercase ">
                                            doky
                                    </h1>
                                    </button>
                                </Link>
                            </div>
                            <div className="ml-auto d-none d-sm-block">
                                <Link to="/Ingresar">
                                    <button type="button" className="btn btn-outline-light mr-2 font-weight-bolder">Ingresar</button>
                                </Link>
                                <Link to="/Registrarse">
                                    <button type="button" className="btn btn-outline-light mr-2 font-weight-bolder">Registrarse</button>
                                </Link>
                            </div>
                            <div className="ml-auto d-block d-sm-none">
                                <Link to="/Ingresar">
                                    <button type="button" className="btn btn-outline-light mr-2">
                                        <span className="oi oi-account-login" title="ingresar" aria-hidden="true"></span>
                                    </button>
                                </Link>
                                <Link to="/Registrarse">
                                    <button type="button" className="btn btn-outline-light mr-2">
                                        <span className="oi oi-plus" title="crear cuenta" aria-hidden="true"></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export { LandingUpperBar }; 
