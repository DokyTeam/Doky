import React, { Component } from 'react'
import './Card.css';
import { Link } from 'react-router-dom';

class Cardsombra extends Component {

  render() {
    const link = "/"+this.props.titulo;

    return (

      <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 ">
        <div className="div-img" >
          <img className="img" src={this.props.foto} title={this.props.titulo} alt={this.props.titulo}></img>
          <div className="text">
            <h2>{this.props.titulo}</h2>
            <p>{this.props.descripcion}</p>
            <p>
              <Link to={link}>
                <button className="btn btn-outline-dark" >
                  Más información »</button>
              </Link>
            </p>
          </div>

        </div>
      </div>
    );
  }
}
export { Cardsombra }; 