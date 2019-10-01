import React, {Component} from 'react'
import pasear from './images/pasear.jpg';
import salto from './images/salto.jpg';
import veterinaria from './images/veterinaria.jpg';
import guarderia from './images/guarderia.jpg';
import Card_sombra from "../cards/Card_sombra.js";

class Service extends Component{

    render(){
        return(
         <div className="container marketing text-align .text-font padding-card">

          <div className="row">
            <Card_sombra titulo= "Paseo" descripcion="Accede a un catálogo de paseadores para tu mascota." foto = {pasear}>

            </Card_sombra>
            <Card_sombra titulo= "Veterinaria" descripcion="Encuentra la veterinaria de tu preferencia." foto = {veterinaria}>

            </Card_sombra>
            <Card_sombra titulo= "Guardería" descripcion="El mejor cuidado para tu mascota cuando no puedes estar con ella." foto = {guarderia}>

            </Card_sombra>
            <Card_sombra titulo= "Saltos" descripcion="Las mejores mascotas para tus cruces." foto = {salto}>

            </Card_sombra> 
            
          </div>
        </div>
        );
    }
}
export default Service;
