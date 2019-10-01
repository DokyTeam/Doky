import React, { Component } from 'react';
import fire from '../../config/Fire'

import  Upperbar  from '../upperbar/upperbar';
import { Landingpage } from '../landingpage/landingpage';
import { Homepage } from '../homepage/homepage';

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
                <Upperbar MainContainerhandler={this.handler}/>
                <div className="rightcontainer">
                    {(this.state.user) ? <Homepage MainContainerhandler={this.handler} /> : <Landingpage MainContainerhandler={this.handler} />}
                </div>
            </div>
        );
    }
}

export { MainContainer };