import React, { Component } from 'react';

class Menu2 extends Component {

    render() {
        return (
            <div>
                <ul id="progressbar">
                    <li className="active">Datos Generales</li>
                    <li className="active">Datos Específicos</li>
                    <li>Descripción</li>
                    <li>Registro exitoso</li>
                </ul>
                <div className="card WhiteColor" style={{ margin: '20px' }}>
                    <div>
                        Menu2
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-success" onClick={() => { this.props.RegisterPageHandler('menu1') }}>Anterior</button>
                        <button type="button" className="btn btn-outline-success" onClick={() => { this.props.RegisterPageHandler('menu3') }}>Siguiente</button>
                    </div>
                </div>
            </div>
        );
    }
}

export { Menu2 };