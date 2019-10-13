import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';

class VeterinariaPage extends Component {

    render() {
        return (
            <div className="WhiteColor">
                <h1>Veterinaria</h1>
                <button onClick={() => this.props.lendercontenthandler('lender_home_page')}>home</button>
            </div>
        );
    }
}

export { VeterinariaPage };