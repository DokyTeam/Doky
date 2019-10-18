import React, { Component } from 'react';

import { LenderUpperbar } from './upper_side_bar/navbar/lender_upper_bar';
import { SideDrawer } from './upper_side_bar/side_drawer/lender_side_drawer';
import { Backdrop } from './upper_side_bar/lender_backdrop/backdrop';

class NavBarWithSideBar extends Component {

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
            <div>
                <LenderUpperbar drawerToggleClickhandler={this.drawerToggleClickhandler} />
                <SideDrawer show={this.state.SideDrawerstate} lendercontenthandler={this.props.lendercontenthandler} />
                {backdrop}
            </div>
        );
    }
}

export { NavBarWithSideBar };