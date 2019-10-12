import React, { Component } from 'react';

import {LenderUpperbar} from './lender_upper_bar/lender_upper_bar';
import {LenderHomePage} from './lender_home_page/lenderhomepage';
import '../global_css/textcolors.css';

class LenderContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { idpage: 'lender_home_page' }
        this.handler = this.Lendercontenthandler.bind(this)
    }
    Lendercontenthandler(some) {
        this.setState({
            idpage: some
        })
    }
    renderSwitch(param) {
        switch(param) {
          case 'lender_home_page':
            return <LenderHomePage/>;
          default:
            return 'foo';
        }
    }

    render() {
        return (
            <div>
                <LenderUpperbar MainContainerhandler={this.props.MainContainerhandler}/>
                {this.renderSwitch(this.state.idpage)}
            </div>
        );
    }
}

export { LenderContainer };