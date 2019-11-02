import React, { Component } from 'react';

import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css';
import './side_drawer.css';
import dog from "./images/perro_doki.png";
import { Link } from 'react-router-dom';


class SideDrawer extends Component {

    render() {

        let drawerClasses = 'side-drawer';
        if(this.props.show){
            drawerClasses = 'side-drawer open';
        }
        return (
            <nav className={drawerClasses}>
                <h1 className="textcenter BigTextFont">Menú de navegación</h1>
                <img align="middle" alt="imagen de un gato" title="El GATO" src={dog} className="sideimg"></img>
                <hr/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 www">
                            <Link to="/Paseos"><button className="thebutt WhiteColor">Paseos</button></Link>
                            <hr/>
                        </div>
                        <div className="col-12 www">
                            <Link to="/Veterinaria"><button className="thebutt WhiteColor">Veterinaria</button></Link>
                            <hr/>
                        </div>
                        <div className="col-12 www">
                            <Link to="/Guardería"><button className="thebutt WhiteColor">Guardería</button></Link>
                            <hr/>
                        </div>
                        <div className="col-12">
                            <Link to="/Saltos"><button className="thebutt WhiteColor">Saltos</button></Link>
                            <hr/>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export { SideDrawer };