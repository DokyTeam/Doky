import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';

import { MainBar } from './navbar/mainbar';
import { SideDrawer } from './side_drawer/side_drawer';
import { Backdrop } from './backdrop/backdrop';

class NavigationSideBar extends Component {

    state = {
        SideDrawerstate: false
    }

    drawerToggleClickhandler = () => {
        this.setState({
            SideDrawerstate: true
        });
    }

    backdropClickhandler = () => {
        this.setState({
            SideDrawerstate: false
        });
    }

    render() {
        let backdrop;

        if (this.state.SideDrawerstate) {
            backdrop = <Backdrop backdropClickhandler={this.backdropClickhandler} />
        }
        return (
            <div className="container-fluid WhiteColor">
                <div className="row">
                    <div className="col-2">
                        <MainBar drawerToggleClickhandler={this.drawerToggleClickhandler} />
                        <SideDrawer show={this.state.SideDrawerstate} lendercontenthandler = {this.props.lendercontenthandler}/>
                        {backdrop}
                    </div>
                </div>
            </div>
        );
    }
}

export { NavigationSideBar };