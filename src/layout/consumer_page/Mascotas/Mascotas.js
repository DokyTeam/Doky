import React, { Component } from 'react';

import '../../global_css/textcolors.css';
import '../../global_css/colors.css';
import '../../global_css/fonts.css';

class Mascotas extends Component {

    render() {
        return (
            <div className="WhiteColor">
                <h1>Mascotas</h1>
                <button onClick={() => this.props.consumercontenthandler('consumer_home_page')}>home</button>
            </div>
        );
    }
}

export { Mascotas };