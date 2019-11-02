import React, { Component } from 'react';

import { NavBarWithSideBar } from './lender_upper_side_bar/lender_navigation_side_bar';
import { LenderHomePage } from './lender_home_page/lenderhomepage';
import { GuarderiaPage } from './services/guarderia/guarderia_page';
import { PaseosPage } from './services/paseos/paseos_page';
import { VeterinariaPage } from './services/veterinaria/veterinaria_page';
import { SaltosPage } from './services/saltos/saltos_page';
import { PerfilPrestador } from './perfil/perfil_prestador';

import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import '../global_css/textcolors.css';

class LenderContainer extends Component {

    render() {
        return (
                <Router>
                    <NavBarWithSideBar/>
                    <div style={{ marginTop: '66px' }}></div>
                    <Switch>
                        <Route path="/" exact component={LenderHomePage} />
                        <Route path="/Paseos" exact component={PaseosPage} />
                        <Route path="/Guardería" exact component={GuarderiaPage} />
                        <Route path="/Veterinaria" exact component={VeterinariaPage} />
                        <Route path="/Saltos" exact component={SaltosPage} />
                        <Route path="/Perfil/:id" exact component={PerfilPrestador} />
                    </Switch>
                </Router>
        );
    }
}

export { LenderContainer };