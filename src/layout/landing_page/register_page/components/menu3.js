import React, { Component } from 'react';

class Menu3 extends Component {

    render() {
        return (
            <div>
            <ul id="progressbar">
                <li className="active">Datos Generales</li>
                <li className="active">Datos Específicos</li>
                <li className="active">Descripción</li>
                <li>Registro exitoso</li>
            </ul>
            <div className="card WhiteColor" style={{ margin: '20px' }}>
                <div>
                    Menu3
                </div>
                <div>
                    <button type="button" class="btn btn-outline-success" onClick={() => { this.props.RegisterPageHandler('menu2') }}>Anterior</button>
                    <button type="button" class="btn btn-outline-success" onClick={() => { this.props.RegisterPageHandler('menu4') }}>Siguiente</button>
                </div>
            </div>
        </div>
        );
    }
}

export { Menu3 };