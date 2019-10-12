import React, { Component } from 'react';

import {LenderUpperbar} from './lender_upper_bar/lender_upper_bar';
import {LenderHomePage} from './lender_home_page/lenderhomepage';
import '../global_css/textcolors.css';

class LenderContainer extends Component {

    render() {
        return (
            <div>
                <LenderUpperbar MainContainerhandler={this.props.MainContainerhandler}/>
                <LenderHomePage/>
            </div>
        );
    }
}

export { LenderContainer };