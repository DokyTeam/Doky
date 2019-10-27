import React, { Component } from 'react';

import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css';
import './cartaServicio.css';

class CartaServicio extends Component {

    estrellas =() =>{
        if(0<this.props.calificacion & this.props.calificacion<0.5){
            return "valoracion val-0"
        }
        if(0.5<=this.props.calificacion & this.props.calificacion<1){
            return "valoracion val-5"
        }
        if(1<=this.props.calificacion & this.props.calificacion<1){
            return "valoracion val-10"
        }
        if(1.5<=this.props.calificacion & this.props.calificacion<2){
            return "valoracion val-15"
        }
        if(2<=this.props.calificacion & this.props.calificacion<2.5){
            return "valoracion val-20"
        }
        if(2.5<=this.props.calificacion & this.props.calificacion<3){
            return "valoracion val-25"
        }
        if(3<=this.props.calificacion & this.props.calificacion<3.5){
            return "valoracion val-30"
        }
        if(3.5<=this.props.calificacion & this.props.calificacion<4){
            return "valoracion val-35"
        }
        if(4<=this.props.calificacion  & this.props.calificacion<4.5){
            return "valoracion val-40"
        }
        if(4.5<=this.props.calificacion & this.props.calificacion<5){
            return "valoracion val-45"
        }
        if(5===this.props.calificacion){
            return "valoracion val-50"
        }
        
    }

    render() {
        
        return (

            <div className="WhiteColor card h-100 " style={{ borderRadius: 10 }}>

                <button className="button_card text-justify"  >
                    <div className="container-fluid">
                        <div className="row align-items-top">
                            <div className="col-md-3 col-lg-4 " >
                                
                                <img className="img_card" src={this.props.foto} title="Foto10" alt="Foto10"></img>
                            </div>
                            <div className="col-md-9 col-lg-8 "  >
                                <h1 className="TextFont MediumTextFont ">{this.props.servicename}</h1>
                                <fieldset className="val-fieldset" ><legend></legend><span className="valoracion val-45"></span></fieldset>
                                 <p className="SmallTextFont card-text ">{this.props.descripcion}</p>
                            </div>
                        </div>
                    </div>


                </button>


            </div>
        );
    }
}

export { CartaServicio };