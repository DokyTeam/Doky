import React, { Component } from 'react';

import { NavBarWithSideBar } from './lender_upper_side_bar/lender_navigation_side_bar';
import { LenderHomePage } from './lender_home_page/lenderhomepage';
import { GuarderiaPage } from './services/guarderia/guarderia_page';
import { PaseosPage } from './services/paseos/paseos_page';
import {VeterinariaPage} from './services/veterinaria/veterinaria_page';
import { SaltosPage } from './services/saltos/saltos_page';
import {PerfilPrestador} from './perfil/perfil_prestador';

import '../global_css/textcolors.css';

class LenderContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { idpage: 'lender_home_page' }
    }

    lendercontenthandler = (param) => {
        this.setState({
            idpage: param
        });
    }

    renderSwitch(param) {
        switch (param) {
            case 'lender_home_page':
                return <LenderHomePage lendercontenthandler={this.lendercontenthandler} />;
            case 'Paseos':
                return <PaseosPage lendercontenthandler={this.lendercontenthandler}/>;
            case 'Guardería':
                return <GuarderiaPage lendercontenthandler={this.lendercontenthandler}/>;
            case 'Veterinaria':
                return <VeterinariaPage lendercontenthandler={this.lendercontenthandler}/>;
            case 'Saltos':
                return <SaltosPage lendercontenthandler={this.lendercontenthandler}/>;
            case 'Perfil':
                    return <PerfilPrestador lendercontenthandler={this.lendercontenthandler}/>;
            default:
                return 'foo';
        }
    }

    render() {
        return (
            <div>
                <NavBarWithSideBar lendercontenthandler={this.lendercontenthandler} />
                <div style={{marginTop: '66px'}}></div>
                {this.renderSwitch(this.state.idpage)}
            </div>
        );
    }
}

export { LenderContainer };