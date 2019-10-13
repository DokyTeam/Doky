import React, { Component } from 'react';
import fire from '../../config/Fire'

import { LandingContainer } from '../landing_page/landing_container';
import { ConsumerContainer } from '../consumer_page/consumer_container';
import { LenderContainer } from '../lender_page/lender_container';

class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isEdit: true,
            user: {}
        }
        this.handler = this.MainContainerhandler.bind(this)
    }

    componentDidMount() {
        this.authListener();
    }

    MainContainerhandler(some) {
        this.setState({
            isEdit: some
        });
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            // console.log(user);
            if (user) {
                this.setState({user});
            //    localStorage.setItem('user', user.id);
            } else {
                this.setState({ user: null });
            //    localStorage.removeItem('user');
            }
        });
    }

    render() {
        return (
            <div>
                <div className="rightcontainer">
                    {(this.state.user) ? <ConsumerContainer/> : 
                    (this.state.isEdit) ? <LandingContainer MainContainerhandler={this.handler} /> : <LenderContainer MainContainerhandler={this.handler} />}
                </div>
            </div>
        );
    }
}

export { MainContainer };