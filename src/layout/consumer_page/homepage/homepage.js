import React, { Component } from 'react';

import Carrusel from './homepagecomponents/carrusel/Carrusel.js';
import Service from './homepagecomponents/service/Service.js';
import Footer from '../../../components/Footer/footer';

class Homepage extends Component {
  render() {
    return (
      <div className="color-backgroud">
        <div className="text-align text-font ">
          <Carrusel></Carrusel>
          <h1 className="text-section padding-section">Nuestros servicios</h1>
          <Service consumercontenthandler = {this.props.consumercontenthandler} />
        </div>
        <Footer/>
      </div>
    );
  }
}

export { Homepage }; 