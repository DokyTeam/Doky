import React, {Component} from 'react'
import './Card.css';

class Cardsombra extends Component{

    render(){ 
        return (
            
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 ">
                 <div className="div-img" >
                <img className="img" src={this.props.foto} title="Foto10" alt="Foto10"></img>
                 <div className="text">
                 <h2>{this.props.titulo}</h2>
                 <p>{this.props.descripcion}</p>
                <p><button className="btn btn-outline-dark"  onClick={() => this.props.consumercontenthandler(this.props.titulo)}>
              Más información »</button></p>
                </div>
                 
                 </div>
          </div>
        );
    }
}
export { Cardsombra }; 