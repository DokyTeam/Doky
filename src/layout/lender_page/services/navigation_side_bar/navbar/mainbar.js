import React, { Component } from 'react';

import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css';
import './mainbar.css'
import { DrawerToggleButton } from './drawer_toggle_button';

class MainBar extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-12 col-md-2">
                        <DrawerToggleButton 
                            drawerToggleClickhandler={this.props.drawerToggleClickhandler}
                            menucolor={this.props.menucolor}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export { MainBar };