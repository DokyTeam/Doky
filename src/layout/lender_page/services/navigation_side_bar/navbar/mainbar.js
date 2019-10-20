import React, { Component } from 'react';

import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css';
import './mainbar.css'
import { DrawerToggleButton } from './drawer_toggle_button';

class MainBar extends Component {

    render() {
        return (
            <div className="container-fluid WhiteColor WhiteColor">
                <div className="row align-items-center">
                    <div className="col-12 col-md-2">
                        <div><DrawerToggleButton drawerToggleClickhandler={this.props.drawerToggleClickhandler} /></div>
                    </div>
                    <div className="col-12 col-md-2 offset-md-3">
                        <div className="textcenter BigTextFont mainbarspacer">
                            <h1>{this.props.servicename}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { MainBar };