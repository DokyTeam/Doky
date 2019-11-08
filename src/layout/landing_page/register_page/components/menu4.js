import React, { Component } from 'react';

class Menu4 extends Component {

    render() {
        return (
            <div>
            <ul id="progressbar">
                <li className="active">Datos Generales</li>
                <li className="active">Datos Específicos</li>
                <li className="active">Descripción</li>
                <li className="active">Registro exitoso</li>
            </ul>
            <div className="card WhiteColor" style={{ margin: '20px' }}>
                <div>
                    Menu4
                </div>
                <div>
                    <button type="button" class="btn btn-outline-success" onClick={() => { this.props.RegisterPageHandler('menu1') }}>Finalizar</button>
                </div>
            </div>
        </div>
        );
    }
}

export { Menu4 };