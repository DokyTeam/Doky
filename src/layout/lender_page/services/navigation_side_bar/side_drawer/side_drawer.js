import React, { Component } from 'react';

import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css';
import './side_drawer.css';
import dog from "./images/perro_doki.png";


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
                            <button className="thebutt WhiteColor" onClick={() => this.props.lendercontenthandler('Paseos')}>Paseos</button>
                            <hr/>
                        </div>
                        <div className="col-12 www">
                            <button className="thebutt WhiteColor" onClick={() => this.props.lendercontenthandler('Veterinaria')}>Veterinaria</button>
                            <hr/>
                        </div>
                        <div className="col-12 www">
                            <button className="thebutt WhiteColor" onClick={() => this.props.lendercontenthandler('Guardería')}>Guardería</button>
                            <hr/>
                        </div>
                        <div className="col-12">
                            <button className="thebutt WhiteColor" onClick={() => this.props.lendercontenthandler('Saltos')}>Saltos</button>
                            <hr/>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export { SideDrawer };