import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import { CartaServicio } from './carta_servicio/CartaServicio'

class ServiciosContenedor extends Component {


    createcarta = () => {
        let table = []
        console.log("Entro")

        table.push(
            this.props.json.map(
                data => {
                    return (
                        <div className="col-12 col-md-6 col-lg-6" style={{ marginBottom: "3%" }} key={data.id} >
                            <CartaServicio servicename={data.id} foto={data.img} descripcion={data.descripcion} calificacion={4.2} />
                        </div>
                    )
                }
            ))
        console.log("salio")
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