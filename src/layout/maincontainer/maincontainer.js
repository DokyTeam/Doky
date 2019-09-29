import React, { Component } from 'react';

import  Upperbar  from '../upperbar/upperbar';
import { Landingpage } from '../landingpage/landingpage';

class MainContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { isEdit: true }
        this.handler = this.MainContainerhandler.bind(this)
    }
    MainContainerhandler(some) {
        this.setState({
            isEdit: some
        })
    }
    render() {
        return (
            <div>
                <Upperbar MainContainerhandler={this.handler}/>
                <div className="rightcontainer">
                    <Landingpage MainContainerhandler={this.handler} />
                </div>
            </div>
        );
    }
}

export { MainContainer };