import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import background from './images/background.jpg'

import { NavigationSideBar } from '../navigation_side_bar/navigation_side_bar';

class VeterinariaPage extends Component {

    render() {
        return (
            <div>
                <img src={background} id="bg" alt="" />
                <NavigationSideBar 
                    lendercontenthandler={this.props.lendercontenthandler} 
                    servicename="Veterinaria" 
                    menucolor="#ffffff"
                />
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h1 className="TextWhiteColor">Hola</h1>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card">
                                hola
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { VeterinariaPage };