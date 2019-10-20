import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import { NavigationSideBar } from '../navigation_side_bar/navigation_side_bar';


class GuarderiaPage extends Component {

    render() {
        return (
            <div>
                <NavigationSideBar lendercontenthandler={this.props.lendercontenthandler} servicename="Guardería"/>
            </div>
        );
    }
}

export { GuarderiaPage };