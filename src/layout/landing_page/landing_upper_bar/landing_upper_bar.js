import React, { Component } from 'react';
import './landing_upper_bar.css';
import '../../global_css/colors.css';

class LandingUpperBar extends Component {

    render() {
        return (
            <div className="Navegation LandingBar">
                <div className="d-flex bd-highlight MainColor align-items-center">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <h1 className="text-light  text-font font-italic text-uppercase ">
                            doky
                        </h1>
                    </button>
                </div>
            </div>

        );
    }
}

export {LandingUpperBar}; 
