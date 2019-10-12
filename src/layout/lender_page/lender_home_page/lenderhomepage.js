import React, { Component } from 'react';

import {Cards} from './home_page_components/cards';
import './home_page_components/cards.css';

class LenderHomePage extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <Cards servicename="Paseos" lendercontenthandler={this.props.lendercontenthandler}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Cards servicename="Guardería" lendercontenthandler={this.props.lendercontenthandler}/>
                    </div> 
                    <div className="col-12 col-md-6 col-lg-3">
                        <Cards servicename="Veterinaria" lendercontenthandler={this.props.lendercontenthandler}/>
                    </div> 
                    <div className="col-12 col-md-6 col-lg-3">
                        <Cards servicename="Saltos" lendercontenthandler={this.props.lendercontenthandler}/>
                    </div> 
                </div>
            </div>
        );
    }
}

export { LenderHomePage };