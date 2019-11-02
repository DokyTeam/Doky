import React, { Component } from 'react';

import { NavBarWithSideBar } from './consumer_upper_side_bar/consumer_navigation_side_bar';
import { Homepage } from './homepage/homepage';
import { GuarderiaPage } from './services/guarderia/guarderia_page';
import { PaseosPage } from './services/paseos/paseos_page';
import { VeterinariaPage } from './services/veterinaria/veterinaria_page';
import { SaltosPage } from './services/saltos/saltos_page';
import { Perfil } from './Perfil/perfil_consumidor';
import { Mascotas } from './Mascotas/Mascotas';

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
                        <Route path="/" exact component={Homepage} />
                        <Route path="/Paseos" exact component={PaseosPage} />
                        <Route path="/Guardería" exact component={GuarderiaPage} />
                        <Route path="/Veterinaria" exact component={VeterinariaPage} />
                        <Route path="/Saltos" exact component={SaltosPage} />
                        <Route path="/Perfil/:id" exact component={Perfil} />
                        <Route path="/Mascotas" exact component={Mascotas} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export { ConsumerContainer };