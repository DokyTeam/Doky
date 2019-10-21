import React, { Component } from 'react';

import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css';
import './lender_side_drawer.css';
import dog from "./images/perro_doki.ico";
import {LoginController} from '../../../../../controllers/login_controller'


class SideDrawer extends Component {

    constructor(props){
        super(props);
        // We will use the LoginController for signing out, so I'll add it to this class
        this.loginController = new LoginController();
        this.logout = this.logout.bind(this);
    }

    // This method is executed once the user clicks on the "shop icon".
    logout(){
        // We will use the log out method provided by our LoginController
        this.loginController.logOut();
    }
    
    render() {

        let drawerClasses = 'side-drawer-lender';
        if(this.props.show){
            drawerClasses = 'side-drawer-lender open';
        }
        return (
            <nav className={drawerClasses}>
                <br/>
                <h1 className="textcenter BigTextFont">Funciones Prestador</h1>
                <img align="middle" alt="imagen de un gato" title="El GATO" src={dog} className="lendersideimg"></img>
                <hr/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 www">
                            <button className="thebuttlend WhiteColor" onClick={()=>{this.props.lendercontenthandler('Perfil')}}>Perfil </button>
                            <hr/>
                        </div>
                        <div className="col-12 www">
                            <button className="thebuttlend WhiteColor">Mis Servicios</button>
                            <hr/>
                        </div>
                        <div className="col-12 www">
                            <button onClick={this.logout} className="thebuttlend WhiteColor">Cerrar sesión</button>
                            <hr/>
                        </div>

                    </div>
                </div>
            </nav>
        );
    }
}

export { SideDrawer };