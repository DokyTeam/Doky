import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import { Barra } from '../Barra/Barra.js';


class SaltosPage extends Component {

    render() {
        return (
            <div className="WhiteColor">
                
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-3">
                                <Barra />
                            </div>
                            <div className="col-md-12 col-lg-9">
                                guarderia
                        <button onClick={() => this.props.consumercontenthandler('consumer_home_page')}>home</button>
                            </div>
                        </div>
                    </div>


                


            </div>
        );
    }
}

export { SaltosPage };