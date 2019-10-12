import React, { Component } from 'react';

import { ConsumerUpperbar } from './consumer_upper_bar/consumer_upper_bar';
import { Homepage } from './homepage/homepage';

class ConsumerContainer extends Component {

    render() {
        return (
            <div>
                <ConsumerUpperbar/>
                <Homepage/>
            </div>
        );
    }
}

export { ConsumerContainer };