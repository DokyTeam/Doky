import React, { Component } from 'react';
import './landingpage.css';
import '../../global_css/colors.css';
import '../../global_css/fonts.css';
import '../../global_css/textcolors.css';
import pug from "./images/pug.webp";
import foto1 from "./images/foto1.webp";
import foto2 from "./images/foto2.webp";
import foto3 from "./images/foto3.webp";
import foto1small from "./images/foto1small.webp";
import foto2small from "./images/foto2small.webp";
import foto3small from "./images/foto3small.webp";
import guarderia from './images/guarderia.webp';
import paseos from './images/paseos.webp';
import veterinaria from './images/veterinaria.webp';
import saltos from './images/saltos.webp';

class Landingpage extends Component {

    render() {
        return (
            <div>
                <div style={{height: '100vh', width: '100%'}}>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner text-align text-font">
                            <div className="carousel-item active" data-interval="1000">
                                <img src={foto1} className="d-none d-sm-block w-100" alt="logo"></img>
                                <img src={foto1small} className="d-block d-sm-none w-100" alt="logo"></img>
                                <div className="carousel-caption">
                                    <h5 className="text-uppercase">Un mundo de posibilidades</h5>
                                    <p>Para el cuidado de tu mascota.</p>
                                </div>
                            </div>
                            <div className="carousel-item" >
                                <img src={foto2} className="d-none d-sm-block w-100" alt="logo"></img>
                                <img src={foto2small} className="d-block d-sm-none w-100" alt="logo"></img>
                                <div className="carousel-caption">
                                    <h5 className="text-uppercase">La única aplicación que te ofrece</h5>
                                    <p>El servicio de saltos.</p>
                                </div>
                            </div>
                            <div className="carousel-item" >
                                <img src={foto3} className="d-none d-sm-block w-100" alt="logo"></img>
                                <img src={foto3small} className="d-block d-sm-none w-100" alt="logo"></img>
                                <div className="carousel-caption">
                                    <h5 className="text-uppercase">Lo que quieres para tu mascota </h5>
                                    <p>En un solo lugar.</p>
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
                    <br />
                    <div className="container">
                        <div className="row align-items-center AltBackgroundColor">
                            <div className="col-sm-12 col-lg-2 textcenter">
                                <img align="middle" alt="El PUG" title="El PUG" src={pug} width="80px"></img>
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
                <hr className="mt-0"/>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-2 textcenter">
                            <img align="middle" alt="" src={paseos} className="img-fluid mb-3" />
                            <h1 className="mb-3">Paseos</h1>
                            <p>Con el servicio de PASEOS de Doky ahora todos podrán contactarte desde nuestro portal para encontrar paseadores.</p>
                        </div>
                        <div className="col-12 col-md-2 textcenter">
                            <img align="middle" alt="" src={veterinaria} className="img-fluid mb-3" />
                            <h1 className="mb-3">Veterinaria</h1>
                            <p>Con el servicio de VETERIANRIA de Doky puedes lograr que millones de usuarios encuentren tu veterinaria en siempre.</p>
                        </div>
                        <div className="col-12 col-md-2 textcenter">
                            <img align="middle" alt="" src={saltos} className="img-fluid mb-3" />
                            <h1 className="mb-3">Guardería</h1>
                            <p>Con el servicio de GUARDERÍA de Doky puedes lograr que millones de usuarios encuentren tu guardería en todo momento.</p>
                        </div>
                        <div className="col-12 col-md-2 textcenter">
                            <img align="middle" alt="" src={guarderia} className="img-fluid mb-3" />
                            <h1 className="mb-3">Saltos</h1>
                            <p>Con el servicio de SALTOS de Doky ahora puede publicar la venta de la genética de tu animal mas valioso a todo el público.</p>
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

export { Landingpage }; 