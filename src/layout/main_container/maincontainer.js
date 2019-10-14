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

    // This method will listen to a change into the browser's cookies.
    // We will use the Fire object created into the "Fire.js" file because that's all that we need.
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

    // TODO: Here we need to know if the current user is a seller or a consumer, and then show him
    // the correct page. For that I suggest you to use the UserController (When I wrote this "UserController is not created")
    // The idea is make that comprobation into the authListener. When we know what kind of user is,
    // save the result into a state variable for then use it below here.
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