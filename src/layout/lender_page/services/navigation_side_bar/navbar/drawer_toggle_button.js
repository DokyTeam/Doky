import React, { Component } from 'react';

import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css';
import './drawer_toggle_button.css';

class DrawerToggleButton extends Component {

    render() {
        return (
            <button className="toggle_button TextMainColor MediumTextFont" onClick={this.props.drawerToggleClickhandler}>
                &#926;MENU&#926;
            </button>
        );
    }
}

export { DrawerToggleButton};