import React, {Component} from 'react'
import './Card.css';

class Card_sombra extends Component{

    render(){ 
        return (
            
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 ">
                 <div className="div-img" >
                <img className="img" src={this.props.foto} title="Foto10" alt="Foto10"></img>
                 <div className="text">
                 <h2>{this.props.titulo}</h2>
                 <p>{this.props.descripcion}</p>
                <p><a className="btn btn-outline-dark" href="#" role="button">Más información »</a></p>
              </div>
                 
                 </div>
          </div>
        );
    }
}
export default Card_sombra;