import React, { Component } from 'react';

import '../../global_css/textcolors.css';
import '../../global_css/colors.css';
import '../../global_css/fonts.css';
import './register_page.css';

import background from "./images/background.jpg";

import { Menu1 } from './components/menu1';
import { Menu2 } from './components/menu2';
import { Menu3 } from './components/menu3';
import { Menu4 } from './components/menu4';

import { LoginController } from '../../../controllers/login_controller';
import { UserController } from '../../../controllers/user_controller';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombres: '',
            apellidos: '',
            fecha_nacimiento: '',
            email: '',
            password: '',
            role: 'Consumidor',
            idpage: 'menu1',
        }
        // We will use the LoginController for registration, so I'll add it to this class
        this.loginController = new LoginController();
        this.userController = new UserController();
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
    }

    RegisterPageHandler = (param) => {
        this.setState({
            idpage: param
        });
    }

    renderSwitch(param) {
        switch (param) {
            case 'menu1':
                return <Menu1 RegisterPageHandler={this.RegisterPageHandler} menu1handler={this.menu1handler} nombres={this.state.nombres}  apellidos={this.state.apellidos} fecha_nacimiento={this.state.fecha_nacimiento}/>;
            case 'menu2':
                return <Menu2 RegisterPageHandler={this.RegisterPageHandler} />;
            case 'menu3':
                return <Menu3 RegisterPageHandler={this.RegisterPageHandler} />;
            case 'menu4':
                return <Menu4 RegisterPageHandler={this.RegisterPageHandler} />;
            default:
                return null;
        }
    }

    menu1handler = (nombres, apellidos, fecha_nacimiento) => {
        this.setState({
            nombres, apellidos, fecha_nacimiento
        });
    }

    // This method will happen once the user clicks on "CREAR CUENTA"
    async signup(event) {
        try {
            // We prevent the default cases so avoid submitting the form
            event.preventDefault();
            // Here we will use the method in the controller for signing up
            // That method will be the responsible for start a session into the browser's cookies once the user
            // is created, so we don't need any more for checking if the auth was successful
            await this.loginController.createAccountWithEmailAndPassword(this.state.email, this.state.password);
            await this.userController.createUser(this.state.email, this.state.role);

        } catch (error) {
            // In the case that there is an error, we will log it in the console
            console.log(error);
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <img src={background} id="bge" alt="" style={{ zIndex: -1 }} />
                <div className="container " >
                    <div className="row">
                        <div className="col-10 offset-1 col-md-8 offset-md-2" style={{ textAlign: 'center' }}>
                            <div className='card' style={{background: 'rgba(255, 255, 255, 0.8)'}}>
                                <h1>Crear Cuenta</h1>
                                {console.log(this.state)}
                                <br />
                                {this.renderSwitch(this.state.idpage)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { RegisterPage };