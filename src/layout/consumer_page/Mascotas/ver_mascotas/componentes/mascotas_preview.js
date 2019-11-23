import React from 'react';

import '../../../../global_css/textcolors.css';
import '../../../../global_css/colors.css';
import '../../../../global_css/fonts.css';

import huella from './images/huella_icon.webp';

import '../mascotas.css';

export default function MascotasPrev(props) {
    return (
        <div className="scrollmascota WhiteColor">
            <button className='mascotasprevbutt' onClick={() => { props.mascotashandler(props.id) }}>
                <div className="thecardmascbut">
                    <div className="textcenter ml-5">
                        <img className="huellaimg" src={huella} alt =""/>
                        <h1 className='mt-1 ml-0 TextDarkMainColor'>{props.nombre}</h1>
                    </div>
                    <div className='mt-5 mb-5'>
                        <p className='mb-0 ultraSmallTextoFont TextAltMainColor'>Especie:</p>
                        <p className='mt-0 MediumTextFont'>{props.especie}</p>
                        <p className='mb-0 ultraSmallTextoFont TextAltMainColor'>Raza:</p>
                        <p className='mt-0 MediumTextFont'>{props.raza}</p>
                    </div>
                </div>
            </button>
        </div>
    );
}

