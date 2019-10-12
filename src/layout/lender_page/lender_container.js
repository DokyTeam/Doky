import React, { Component } from 'react';

import {LenderUpperbar} from './lender_upper_bar/lender_upper_bar';

class LenderContainer extends Component {

    render() {
        return (
            <div>
                <LenderUpperbar MainContainerhandler={this.props.MainContainerhandler}/>
                <h1>Servicio 1</h1>
                <h1>Servicio 2</h1>
                <h1>Servicio 3</h1>
                <h1>Servicio 4</h1>
            </div>
        );
    }
}

export { LenderContainer };