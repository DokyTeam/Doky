import React, { Component } from 'react';

import {Cards} from './home_page_components/cards';
import './home_page_components/cards.css';

class LenderHomePage extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <Cards servicename="Paseos"/>
                        <button className="buttonlol" onClick={this.props.lendercontenthandler.bind(this, "Paseos")}>IR</button>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Cards servicename="Guarderia"/>
                        <button className="buttonlol" onClick={this.props.lendercontenthandler.bind(this, "Guarderia")}>IR</button>
                    </div> 
                    <div className="col-12 col-md-6 col-lg-3">
                        <Cards servicename="Veterinaria"/>
                        <button className="buttonlol" onClick={this.props.lendercontenthandler.bind(this, "Veterinaria")}>IR</button>
                    </div> 
                    <div className="col-12 col-md-6 col-lg-3">
                        <Cards servicename="Saltos"/>
                        <button className="buttonlol" onClick={this.props.lendercontenthandler.bind(this, "Saltos")}>IR</button>
                    </div> 
                </div>
            </div>
        );
    }
}

export { LenderHomePage };