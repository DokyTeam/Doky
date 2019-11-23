import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';

import './mascotas.css';

import { Link } from 'react-router-dom';
import MascotasCard from './componentes/mascotas_card';
import MascotasPrev from './componentes/mascotas_preview';

import { UserController } from '../../../../controllers/user_controller';

class Mascotas extends Component {

    state = {
        mascotaactual: 0,
        mascotas: [],
    }

    mascotashandler = (param) => {
        this.setState({
            mascotaactual: param
        });
    }

    componentDidMount() {
        this.loadUserInfo()
    }

    async loadUserInfo() {
        try {
            var userController = new UserController();
            const mascotasinfo = await userController.getInformacionMascotas();
            console.log(mascotasinfo);
            this.setState({ mascotas: mascotasinfo });
        } catch (error) {
            console.log(error)
        }
    }

    render() {

        let nombre, especie, raza, fechaNacimiento, condicionesEspeciales, enfermedades, descripcion;
        let table = [];

        this.state.mascotas.map((data, index) => {
            if (index === this.state.mascotaactual) {
                nombre = data.nombre;
                especie = data.especie;
                raza = data.raza;
                fechaNacimiento = data.fechaNacimiento;
                condicionesEspeciales = data.condicionesEspeciales;
                enfermedades = data.enfermedades;
                descripcion = data.descipcion;
            }
            table.push(
                <MascotasPrev
                    nombre={data.nombre}
                    key={index}
                    id={index}
                    especie={data.especie}
                    raza={data.raza}
                    mascotashandler={this.mascotashandler}
                />
            )

            return null;
        });

        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <MascotasCard
                            nombre={nombre}
                            especie={especie}
                            raza={raza}
                            fechaNacimiento={fechaNacimiento}
                            condicionesEspeciales={condicionesEspeciales}
                            enfermedades={enfermedades}
                            descripcion={descripcion}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card mb-4">
                            <div className="card-body textcenter">
                                <h2 className=" card-title TextDarkMainColor mb-3">Tus Mascotas</h2>
                                <p className="card-subtitle text-muted mb-3">Con Doky puedes tener la información de todas tus mascotas siempre a la mano.</p>
                                <Link to={`/RegistroMascotas`}><button className="btn btn-outline-success">Añadir Mascota</button></Link>
                            </div>
                        </div>
                        <hr/>
                        <div className="scrollmascotas">
                            {table}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Mascotas };

