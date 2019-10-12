import React, { Component } from 'react';

import '../../global_css/textcolors.css';

class LenderHomePage extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <h1>Servicio 1</h1>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h1>Servicio 2</h1>
                    </div> 
                    <div className="col-12 col-md-6 col-lg-3">
                        <h1>Servicio 3</h1>
                    </div> 
                    <div className="col-12 col-md-6 col-lg-3">
                        <h1>Servicio 4</h1>
                    </div> 
                </div>
            </div>
        );
    }
}

export { LenderHomePage };