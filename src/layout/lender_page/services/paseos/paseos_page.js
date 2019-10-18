import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';

import { NavigationSideBar } from '../navigation_side_bar/navigation_side_bar';

class PaseosPage extends Component {

    render() {
        return (
            <div className="WhiteColor">
                <h1 className="textcenter">Paseos</h1>
                <NavigationSideBar lendercontenthandler={this.props.lendercontenthandler} />
                <hr />
            </div>
        );
    }
}

export { PaseosPage };