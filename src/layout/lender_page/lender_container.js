import React, { Component } from 'react';

import { LenderUpperbar } from './lender_upper_bar/lender_upper_bar';
import { LenderHomePage } from './lender_home_page/lenderhomepage';
import { GuarderiaPage } from './services/guarderia/guarderia_page';
import { PaseosPage } from './services/paseos/paseos_page';
import {VeterinariaPage} from './services/veterinaria/veterinaria_page';
import { SaltosPage } from './services/saltos/saltos_page';

import '../global_css/textcolors.css';

class LenderContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { idpage: 'lender_home_page' }
        this.handler = this.lendercontenthandler.bind(this)
    }

    lendercontenthandler(some) {
        this.setState({
            idpage: some
        })
    }

    renderSwitch(param) {
        switch (param) {
            case 'lender_home_page':
                return <LenderHomePage lendercontenthandler={this.handler} />;
            case 'Paseos':
                return <PaseosPage />;
            case 'Guarderia':
                return <GuarderiaPage />;
            case 'Veterinaria':
                return <VeterinariaPage />;
            case 'Saltos':
                return <SaltosPage />;
            default:
                return 'foo';
        }
    }

    render() {
        return (
            <div>
                <LenderUpperbar MainContainerhandler={this.props.MainContainerhandler} />
                {this.renderSwitch(this.state.idpage)}
            </div>
        );
    }
}

export { LenderContainer };