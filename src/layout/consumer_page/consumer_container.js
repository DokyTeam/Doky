import React, { Component } from 'react';

import { ConsumerUpperbar } from './consumer_upper_bar/consumer_upper_bar';
import { Homepage } from './homepage/homepage';
import { GuarderiaPage } from './services/guarderia/guarderia_page';
import { PaseosPage } from './services/paseos/paseos_page';
import {VeterinariaPage} from './services/veterinaria/veterinaria_page';
import { SaltosPage } from './services/saltos/saltos_page';

class ConsumerContainer extends Component {

    constructor(props) {
        super(props)
        this.state = { idpage: 'consumer_home_page' }
    }

    consumercontenthandler = (param) => {
        this.setState({
            idpage: param
        });
    }

    renderSwitch(param) {
        switch (param) {
            case 'consumer_home_page':
                return <Homepage consumercontenthandler={this.consumercontenthandler} />;
            case 'Paseos':
                return <PaseosPage consumercontenthandler={this.consumercontenthandler}/>;
            case 'Guardería':
                return <GuarderiaPage consumercontenthandler={this.consumercontenthandler}/>;
            case 'Veterinaria':
                return <VeterinariaPage consumercontenthandler={this.consumercontenthandler}/>;
            case 'Saltos':
                return <SaltosPage consumercontenthandler={this.consumercontenthandler}/>;
            default:
                return 'foo';
        }
    }

    render() {
        return (
            <div>
                <ConsumerUpperbar MainContainerhandler={this.props.MainContainerhandler} />
                {this.renderSwitch(this.state.idpage)}
            </div>
        );
    }
}

export { ConsumerContainer };