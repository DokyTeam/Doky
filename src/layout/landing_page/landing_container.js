import React, { Component } from 'react';

import { LandingUpperBar } from './landing_upper_bar/landing_upper_bar';
import { Landingpage } from './landing_page/landingpage';
import { LoginPage } from './login_page/login_page';
import { RegisterPage } from './register_page/register_page';

import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

class LandingContainer extends Component {

    render() {
        return (
            <Router>
                <LandingUpperBar />
                <div style={{ marginTop: '66px' }}></div>
                <Switch>
                    <Route path="/" exact component={Landingpage} />
                    <Route path="/Ingresar" exact component={LoginPage} />
                    <Route path="/Registrarse" exact component={RegisterPage} />
                </Switch>
            </Router>
        );
    }
}

export { LandingContainer };