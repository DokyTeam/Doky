import React, { Component } from 'react';

import Cards from './home_page_components/cards';
import './home_page_components/cards.css';

import homeimg from "./images/home_page.webp";
import homeimgsmall from "./images/home_page_small.webp";
import homeimglarge from "./images/home_page_large.webp";

import './lenderhomepage.css';

import pasear from './home_page_components/images/paseos.webp';
import salto from './home_page_components/images/saltos.webp';
import veterinaria from './home_page_components/images/veterinaria.webp';
import guarderia from './home_page_components/images/guarderia.webp';


class LenderHomePage extends Component {

    render() {
        return (
            <>
                <div className="lenderhomeimgcontainer">
                    <div className="d-none d-lg-block">
                        <img className="lenderhomepageimg" src={homeimglarge} alt="" />
                        <h1 className="lenderhometitle">Nuestros Servicios</h1>
                    </div>
                    <div className="d-none d-md-block d-lg-none">
                        <img className="lenderhomepageimg" src={homeimg} alt="" />
                        <h1 className="lenderhometitle">Nuestros Servicios</h1>
                    </div>
                    <div className="d-block d-md-none">
                        <img className="lenderhomepageimg" src={homeimgsmall} alt="" />
                        <h3 className="lenderhometitle">Nuestros Servicios</h3>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <Cards 
                                servicename="Paseos" 
                                foto={pasear} 
                                mensaje = 'Comienza a ganar dinero paseando perros!!!'
                                descripcion="Con el servicio de PASEOS de Doky ahora todos podrán contactarte desde nuestro portal para encontrar paseadores." />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <Cards 
                                servicename="Veterinaria" 
                                foto={veterinaria} 
                                mensaje = 'Haz que tu veterinaria nunca vuelva a estar vacía!!!'
                                descripcion="Con el servicio de VETERIANRIA de Doky puedes lograr que millones de usuarios encuentren tu veterinaria en siempre." />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <Cards 
                                servicename="Guardería" 
                                foto={guarderia} 
                                mensaje = '¿Cansado que tu guardería siempre este vacía?'
                                descripcion="Con el servicio de GUARDERÍA de Doky puedes lograr que millones de usuarios encuentren tu guardería en todo momento." />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <Cards 
                                servicename="Saltos" 
                                foto={salto} 
                                mensaje = 'Nunca fue más fácil vender la genética de tu animal'
                                descripcion="Con el servicio de SALTOS de Doky ahora puede publicar la venta de la genética de tu animal mas valioso a todo el público." />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export { LenderHomePage };