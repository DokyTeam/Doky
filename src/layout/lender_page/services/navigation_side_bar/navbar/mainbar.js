import React, { Component } from 'react';

import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css';
import './mainbar.css'
import { DrawerToggleButton } from './drawer_toggle_button';

class MainBar extends Component {

    render() {
        return (
            <div className="container-fluid WhiteColor">
                <div className="row">
                    <div className="col-2">
                        <div><DrawerToggleButton drawerToggleClickhandler={this.props.drawerToggleClickhandler} /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export { MainBar };