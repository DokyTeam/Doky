import React, { Component } from 'react';

import '../../global_css/textcolors.css';
import '../../global_css/colors.css';
import '../../global_css/fonts.css';
import { LoginController } from '../../../controllers/login_controller';
import { UserController } from '../../../controllers/user_controller';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            localidades: [],
        }
        // We will use the LoginController for authentication, so I'll add it to this class
        this.loginController = new LoginController();
        this.userController = new UserController();
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    // This method will happen once the user clicks on "INGRESAR"
    login = async (e) => {
        try {
            // We prevent the default cases so avoid submitting the form
            e.preventDefault();
            // Here we will use the method in the controller for signing in
            // That method will be the responsible for start a session into the browser's cookies,
            // so we don't need any more for checking if the auth was successful
            await this.loginController.signInWithEmailAndPassword(this.state.email, this.state.password);
        } catch (error) {
            // In the case that there is an error, we will log it 
            console.log(error);
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    // TODO: There is a bug when you put the incorrect password but the email is correct, then when you
    // put your password again, and it is the correct, the app keeps taking an incorrect password.
    // NOTE: I just notice that the session is opened, but you have to press F5.
    // To be honest I don't understand very good when the bug happens =(
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col" style={{textAlign: 'center'}}>
                        <p className="TitleTextFont" style={{ marginTop: 30, fontSize: 25 }}>BIENVENIDO</p>
                        <br />
                        <br />
                        <form>
                            <h6>USUARIO:</h6>
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
                            <input type="submit" value="INGRESAR" className="button MainColor TextWhiteColor" onClick={this.login} />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export { LoginPage };