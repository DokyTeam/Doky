import React, { Component } from 'react';

import { LandingUpperBar } from './landing_upper_bar/landing_upper_bar';
import { Landingpage } from './twocolpage/landingpage';

class LandingContainer extends Component {

    render() {
        return (
            <div>
                <LandingUpperBar/>
                <Landingpage MainContainerhandler={this.props.MainContainerhandler}/>
            </div>
        );
    }
}

export { LandingContainer };