import React, { Component } from 'react';

class Menu1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombres: this.props.nombres,
            apellidos: this.props.apellidos,
            fecha_nacimiento: this.props.fecha_nacimiento
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <ul id="progressbar">
                    <li className="active">Datos Generales</li>
                    <li>Datos Específicos</li>
                    <li>Descripción</li>
                    <li>Registro exitoso</li>
                </ul>
                <div className="card WhiteColor" style={{ margin: '20px' }}>
                    <div>
                        Menu1
                    </div>
                    <form>
                        <input type="text" name="nombres" value={this.state.nombres} placeholder="Nombres"  onChange={this.handleChange}/>
                        <br/>
                        <input type="text" name="apellidos" value={this.state.apellidos} placeholder="Apellidos" onChange={this.handleChange} />
                        <br/>
                        <input type="text" name="fecha_nacimiento" value={this.state.fecha_nacimiento} placeholder="Fecha Nacimiento" onChange={this.handleChange} />
                    </form>
                    <div>
                        <button type="button" className="btn btn-outline-success" 
                            onClick={() => { this.props.RegisterPageHandler('menu2')
                                             this.props.menu1handler(this.state.nombres, this.state.apellidos, this.state.fecha_nacimiento)} }>Siguiente
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export { Menu1 };