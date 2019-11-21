import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import background from './images/background.jpg'

import { NavigationSideBar } from '../navigation_side_bar/navigation_side_bar';

class SaltosPage extends Component {

    render() {
        return (
            <div>
                <img src={background} id="bg" alt="" />
                <NavigationSideBar 
                    lendercontenthandler={this.props.lendercontenthandler}
                    menucolor="black"
                />
            </div>
        );
    }
}

export { SaltosPage };