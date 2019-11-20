import React from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import { CartaServicio } from './carta_servicio/CartaServicio'

function createcarta (props) {
    let table = []
    table.push(
        props.json.map(
            data => {
                return (
                    <div className="col-12 col-md-6 col-lg-6" style={{ marginBottom: "3%" }} key={data.id} >
                        <CartaServicio 
                        type="Guardería"
                        servicename={data.id}
                        usuario = {data.usuario}
                        foto={data.img} 
                        descripcion={data.descripcion}
                        calificacion={data.puntuacion} 
                        />
                    </div>
                )
            }
        ))
    return table
}

function ServiciosContenedor (props) {
        return (
            <div className="row" >
                {createcarta(props)}
            </div>
        );
}

export { ServiciosContenedor };