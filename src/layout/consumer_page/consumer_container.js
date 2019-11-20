import React, { Component } from 'react';

import { NavBarWithSideBar } from './consumer_upper_side_bar/consumer_navigation_side_bar';
import { Homepage } from './homepage/homepage';
import { GuarderiaPage } from './services/guarderia/guarderia_page';
import { PaseosPage } from './services/paseos/paseos_page';
import { VeterinariaPage } from './services/veterinaria/veterinaria_page';
import { SaltosPage } from './services/saltos/saltos_page';
import { Perfil } from './Perfil/perfil_consumidor';
import { Mascotas } from './Mascotas/Mascotas';
import { GuarderiaVisualizar } from './services/guarderia/guarderia_visualizar';
import {VeterinariaVisualizar} from './services/veterinaria/veterinaria_visualizar';
import {SaltosVisualizar} from './services/saltos/saltos_visualizar';
import {PaseosVisualizar} from './services/paseos/paseos_visualizar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

class ConsumerContainer extends Component {

    render() {
        return (
            <div>
                <Router>
                    <NavBarWithSideBar consumercontenthandler={this.consumercontenthandler} />
                    <div style={{ marginTop: '66px' }}></div>
                    <Switch>
                        <Route path="/Paseos" exact component={PaseosPage} />
                        <Route path="/Guardería" exact component={GuarderiaPage} />
                        <Route path="/Guardería/:id" exact component={GuarderiaVisualizar} />
                        <Route path="/Veterinaria/:id" exact component={GuarderiaVisualizar} />
                        <Route path="/Saltos/:id" exact component={SaltosVisualizar} />
                        <Route path="/Paseos/:id" exact component={PaseosVisualizar} />
                        <Route path="/Veterinaria" exact component={VeterinariaVisualizar} />
                        <Route path="/Saltos" exact component={SaltosPage} />
                        <Route path="/Perfil/:id" exact component={Perfil} />
                        <Route path="/Mascotas" exact component={Mascotas} />
                        <Route path="/" component={Homepage} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export { ConsumerContainer };