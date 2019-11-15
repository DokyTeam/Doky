import React from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import './cards.css';
import { Link } from 'react-router-dom';

 export default function Cards(props) {
    const link = "/" + props.servicename;
    return(
        <Link to={link} style={{ textDecoration: 'none' }}>
            <div className="WhiteColor card h-97 mt-5 home-card-controler" id="lol">
                <img className="card-img-top img-fluid" src={props.foto} alt={props.servicename} />
                <div className="card-body">
                    <h2 className=" card-title TextDarkMainColor mb-0">{props.servicename}</h2>
                    <p className="card-subtitle text-muted text mb-0">{props.mensaje}</p>
                    <p className="SmallTextFont card-text TextUltraDarkColor">{props.descripcion}</p>
                </div>
            </div>
        </Link>
    )
}
