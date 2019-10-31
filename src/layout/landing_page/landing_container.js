import React, { Component } from 'react';

import { LandingUpperBar } from './landing_upper_bar/landing_upper_bar';
import { Landingpage } from './login_register/landingpage';

class LandingContainer extends Component {

    render() {
        return (
            <div>
                <LandingUpperBar/>
                <div style={{marginTop: '66px'}}></div>
                <Landingpage MainContainerhandler={this.props.MainContainerhandler}/>
            </div>
        );
    }
}

export { LandingContainer };