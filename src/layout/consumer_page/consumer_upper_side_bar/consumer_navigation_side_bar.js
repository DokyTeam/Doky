import React, { Component } from 'react';

import { LenderUpperbar } from './upper_side_bar/navbar/consumer_upper_bar';
import { SideDrawer } from './upper_side_bar/side_drawer/consumer_side_drawer';
import { Backdrop } from './upper_side_bar/consumer_backdrop/backdrop';

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
                <LenderUpperbar drawerToggleClickhandler={this.drawerToggleClickhandler} consumercontenthandler={this.props.consumercontenthandler}  />
                <SideDrawer show={this.state.SideDrawerstate} consumercontenthandler={this.props.consumercontenthandler} />
                {backdrop}
            </div>
        );
    }
}

export { NavBarWithSideBar };