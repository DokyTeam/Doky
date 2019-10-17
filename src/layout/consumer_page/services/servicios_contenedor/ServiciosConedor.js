import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import { CartaServicio } from './carta_servicio/CartaServicio'

class ServiciosContenedor extends Component {


    createcarta = () => {
        let table = []
        // Outer loop to create parent

        table.push(this.props.json.map((data, index) => {
            return <div className="col-12 col-md-6 col-lg-3" key={data.nombre} >
                <CartaServicio servicename={data.nombre} foto={data.foto} descripcion={data.descripcion} />
            </div>

        }
        ))
        return table
    }

    render() {
        return (

            <div className="row" >

                {this.createcarta()}

            </div>
        );
    }
}

export { ServiciosContenedor };