import React, { Component } from 'react';
import fire from '../../config/Fire'

import { LandingContainer } from '../landing_page/landing_container';
import { ConsumerContainer } from '../consumer_page/consumer_container';
import { LenderContainer } from '../lender_page/lender_container';
import { UserController } from '../../controllers/user_controller'
import { useStore } from '../../utilities/Store'

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
    async authListener() {
        fire.auth().onAuthStateChanged(
            async (user) => {
                if (user) {            
                    window.history.pushState('home', 'home', '/');
                    const[store,setStore] = useStore();
                    setStore(user.email)
                    let userController = new UserController();
                    const data = await userController.getTipoUsuario(user.email);
                    switch (data.tipo) {
                        case 'Consumidor':
                            this.setState({ user: user, isEdit: true });
                            break;
                        case 'Prestador':
                            this.setState({ user: user, isEdit: false });
                            break;
                        default:
                            console.log("Dato no permitido");
                    }
                } else {
                    this.setState({ user: null });
                }
            });

    }

    // TODO: Here we need to know if the current user is a seller or a consumer, and then show him
    // the correct page. For that I suggest you to use the UserController (When I wrote this "UserController is not created")
    // The idea is make that comprobation into the authListener. When we know what kind of user is,
    // save the result into a state variable for then use it below here.
    render() {
        if (this.state.user) {
            return (
                <div>
                    <div>
                        {
                            this.state.isEdit ? <ConsumerContainer /> : <LenderContainer MainContainerhandler={this.handler} />
                        }
                    </div>
                </div>
            );
        } else {
            return <LandingContainer MainContainerhandler={this.handler} />
        }
    }
}

export { MainContainer };