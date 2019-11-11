import React, { Component } from 'react';
import { Backdrop } from './cons_uplo_backdrop/backdropimg'
import {UploadCard} from './upload_card/upload_card';


class UploadPage extends Component {

    render() {
        return (
            <div>
                <UploadCard uploadimgpagehandler={this.props.uploadimgpagehandler} userinfo={this.props.userinfo} perfilconsumidorhandler={this.props.perfilconsumidorhandler}/>
                <Backdrop uploadimgpagehandler={this.props.uploadimgpagehandler} />
            </div>
        );
    }
}

export { UploadPage };