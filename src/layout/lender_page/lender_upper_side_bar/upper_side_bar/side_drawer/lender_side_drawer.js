import React, { Component } from 'react';

import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css';
import './lender_side_drawer.css';
import icon from "./images/navbaricon.jpg";
import {LoginController} from '../../../../../controllers/login_controller'
import { Link } from 'react-router-dom';
import { useStore } from '../../../../../utilities/Store'


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
        
        const[store] = useStore();
        const id = store();
        let drawerClasses = 'side-drawer-lender';
        if(this.props.show){
            drawerClasses = 'side-drawer-lender open';
        }
        return (
            <nav className={drawerClasses}>
                <br/>
                <h1 className="textcenter BigTextFont">Funciones Prestador</h1>
                <img align="middle" alt="" src={icon} className="lendersideimg"></img>
                <hr/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 www">
                        <Link to={`/Perfil/${id}`}><button className="thebuttlend WhiteColor" >Perfil </button></Link>
                            <hr/>
                        </div>
                        <div className="col-12 www">
                            <button className="thebuttlend WhiteColor">Mis Servicios</button>
                            <hr/>
                        </div>
                        <div className="col-12 www">
                             <Link to="/"><button onClick={this.logout} className="thebuttlend WhiteColor">Cerrar sesión</button></Link>
                            <hr/>
                        </div>

                    </div>
                </div>
            </nav>
        );
    }
}

export { SideDrawer };