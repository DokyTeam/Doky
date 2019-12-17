import React, { Component } from 'react';

import { NavBarWithSideBar } from './lender_upper_side_bar/lender_navigation_side_bar';
import { LenderHomePage } from './lender_home_page/lenderhomepage';
import { GuarderiaPage } from './services/guarderia/guarderia_page';
import { PaseosPage } from './services/paseos/paseos_page';
import { VeterinariaPage } from './services/veterinaria/veterinaria_page';
import { SaltosPage } from './services/saltos/saltos_page';
import { PerfilPrestador } from './perfil/perfil_prestador';
import { ServiceManager } from './service_manager/service_manager';
import { LenderServicesContainer } from './servicios_vigentes/services_container/lend_services_container';
import { LendMisServicios } from './servicios_vigentes/service_page/lendmisServicios'

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
                        <Route path="/Paseos" exact component={PaseosPage} />
                        <Route path="/Guardería" exact component={GuarderiaPage} />
                        <Route path="/Veterinaria" exact component={VeterinariaPage} />
                        <Route path="/Saltos" exact component={SaltosPage} />
                        <Route path="/Perfil" exact component={PerfilPrestador} />
                        <Route path="/GestorServicios" exact component={ServiceManager}/>
                        <Route path="/ServiciosVigentes" exact component={LenderServicesContainer}/>
                        <Route path="/ServiciosVigentes/:id" exact component={LendMisServicios}/>
                        <Route path="/" component={LenderHomePage} />
                    </Switch>
                </Router>
        );
    }
}

export { LenderContainer };