import React, { Component } from 'react';

import {Cards} from './home_page_components/cards';

class LenderHomePage extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <Cards servicename="Paseos"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Cards servicename="Guarderia"/>
                    </div> 
                    <div className="col-12 col-md-6 col-lg-3">
                        <Cards servicename="Veterinaria"/>
                    </div> 
                    <div className="col-12 col-md-6 col-lg-3">
                        <Cards servicename="Saltos"/>
                    </div> 
                </div>
            </div>
        );
    }
}

export { LenderHomePage };