import React, {Component} from 'react'
import pasear from './images/pasear.jpg';
import salto from './images/salto.jpg';
import veterinaria from './images/veterinaria.jpg';
import guarderia from './images/guarderia.jpg';
import {Cardsombra}  from "../cards/Card_sombra.js";
class Service extends Component{
   
    render(){
        return(
         <div className="container marketing text-align .text-font padding-card">

          <div className="row">
            <Cardsombra titulo= "Paseos" descripcion="Accede a un catálogo de paseadores para tu mascota." foto = {pasear} consumercontenthandler={this.props.consumercontenthandler}>

            </Cardsombra>
            <Cardsombra titulo= "Veterinaria" descripcion="Encuentra la veterinaria de tu preferencia." foto = {veterinaria} consumercontenthandler={this.props.consumercontenthandler}>

            </Cardsombra>
            <Cardsombra titulo= "Guardería" descripcion="El mejor cuidado para tu mascota cuando no puedes estar con ella." foto = {guarderia} consumercontenthandler={this.props.consumercontenthandler}>

            </Cardsombra>
            <Cardsombra titulo= "Saltos" descripcion="Las mejores mascotas para tus cruces." foto = {salto} consumercontenthandler={this.props.consumercontenthandler}>

            </Cardsombra> 
            
          </div>
        </div>
        );
    }
}
export default Service;
