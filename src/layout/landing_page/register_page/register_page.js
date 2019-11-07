import React, { Component } from 'react';

import '../../global_css/textcolors.css';
import '../../global_css/colors.css';
import '../../global_css/fonts.css';
import './register_page.css';
import { LoginController } from '../../../controllers/login_controller';
import { UserController } from '../../../controllers/user_controller';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            role: 'Consumidor'
        }
        // We will use the LoginController for registration, so I'll add it to this class
        this.loginController = new LoginController();
        this.userController = new UserController();
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
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

    render() {
        return (
            <div>
                <img src="http://s1.bwallpapers.com/wallpapers/2014/01/27/spring-animals_121917388.jpg" id="bge" alt="" />
                <div className="container " style={{ zIndex: 20 }}>
                    <div className="row">
                        <div className="col-8 offset-2" style={{ textAlign: 'center' }}>
                            <div className="card">
                            <p className="TitleTextFont" style={{ marginTop: 40 }}>CREA TU NUEVA CUENTA</p>
                            <br />
                            <br />
                            <form onSubmit={this.handleSubmit}>
                                <h6>CORREO:</h6>
                                <div className="input-group mb-3 loginandregisterinput">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                            <span className="oi oi-person" title="person" aria-hidden="true"></span>
                                        </span>
                                    </div>
                                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <h6>CONTRASEÑA:</h6>
                                <div className="input-group mb-3 loginandregisterinput">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                            <span className="oi oi-chevron-right" title="person" aria-hidden="true"></span>
                                        </span>
                                    </div>
                                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <h6>ROL:</h6>
                                <select className="theselect" name="role" value={this.state.role} onChange={this.handleChange}>
                                    <option value='Consumidor'>Consumidor</option>
                                    <option value="Prestador">Prestador</option>
                                </select>
                                <br />
                                <br />
                                <input type="submit" value="CREAR CUENTA" className="button MainColor TextWhiteColor" onClick={this.signup} />
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { RegisterPage };