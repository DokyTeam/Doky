import React, { Component } from 'react';

import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css';
import './drawer_toggle_button.css';

class DrawerToggleButton extends Component {

    render() {
        return (
            <button 
                onClick={this.props.drawerToggleClickhandler}
                style={{color: this.props.menucolor}}
                className="toggle_button MediumTextFont mt-2" 
            >
                Menú
            </button>
        );
    }
}

export { DrawerToggleButton};