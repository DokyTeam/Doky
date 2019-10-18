import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';

import {NavigationSideBar} from '../navigation_side_bar/navigation_side_bar';

class VeterinariaPage extends Component {

    render() {
        return (
            <div className="WhiteColor">
                <h1 className="textcenter">Veterinaria</h1>
                <NavigationSideBar lendercontenthandler={this.props.lendercontenthandler} />
                <hr />
            </div>
        );
    }
}

export { VeterinariaPage };