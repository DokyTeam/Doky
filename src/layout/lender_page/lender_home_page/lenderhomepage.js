import React, { Component } from 'react';

import { Cards } from './home_page_components/cards';
import './home_page_components/cards.css';

import homeimg from "./images/home_page.jpeg";
import homeimgsmall from "./images/home_page_small.jpeg";
import homeimglarge from "./images/home_page_large.jpeg";

import './lenderhomepage.css';

import pasear from './home_page_components/images/paseos.jpg';
import salto from './home_page_components/images/saltos.jpg';
import veterinaria from './home_page_components/images/veterinaria.jpg';
import guarderia from './home_page_components/images/guarderia.jpg';


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
                            <Cards servicename="Paseos" foto={pasear} lendercontenthandler={this.props.lendercontenthandler} descripcion="Comienza a ganar dinero paseando perros, con el servicio de PASEOS de Doky ahora todos podrán contactarte desde nuestro portal para que puedas pasear sus mascotas siempre." />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <Cards servicename="Veterinaria" foto={veterinaria} lendercontenthandler={this.props.lendercontenthandler} descripcion="Haz que tu veterinaria nunca vuelva a estar vacía. Con el servicio de VETERIANRIA de Doky puedes lograr que millones de usuarios encuentren tu veterinaria en todo momento." />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <Cards servicename="Guardería" foto={guarderia} lendercontenthandler={this.props.lendercontenthandler} descripcion="¿Cansado que tu guardería siempre este vacía? Con el servicio de GUARDERÍA de Doky puedes lograr que millones de usuarios encuentren tu guardería en todo momento." />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <Cards servicename="Saltos" foto={salto} lendercontenthandler={this.props.lendercontenthandler} descripcion="Nunca fue más fácil vender la genética de tu animal más valioso, Con el servicio de SALTOS de Doky ahora puede publicar la venta de la genética de tu animal a todo el público." />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export { LenderHomePage };