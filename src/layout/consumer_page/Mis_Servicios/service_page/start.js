import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';
import './start.css';


import { ServiciosDispController } from '../../../../controllers/serviciosDisponibles_controller';
import { switchCase } from '@babel/types';

class Start extends Component {

    state = {
        value: 0,
        experiencia: ""
    }

    calificarServicio = async (nuevaPuntuacion) => {
        try {
            let serviceController = new ServiciosDispController();
            switch (this.props.tipo) {
                case "guarderia":
                    await serviceController.updateStarsGuarderia(this.props.nombre, nuevaPuntuacion);
                    break;
                case "veterinaria":
                    await serviceController.updateStarsVeterinaria(this.props.nombre, nuevaPuntuacion);
                    break;
                case "paseo":
                    await serviceController.updateStarsPaseo(this.props.nombre, nuevaPuntuacion);
                    break;
                case "salto":
                    await serviceController.updateStarsSalto(this.props.nombre, nuevaPuntuacion);
                    break;

            }

        } catch (error) {
            console.log(error)
        }
    }

    eliminarServicio = async () => {
        try {
            let serviceController = new ServiciosDispController();
            await serviceController.deleteServicio(this.props.nombre, this.props.tipo);

        } catch (error) {
            console.log(error)
        }
    }

    render() {

        let drawerClasses = 'start-drawer-cons';
        if (this.props.show) {
            drawerClasses = 'start-drawer-cons open';
        }

        return (
            <>
                <div className={drawerClasses}>

                    <div id="msform">
                        <fieldset>
                            <h2 className="fs-title">Cuentanos tu experiencia </h2>
                            <h3 className="fs-subtitle">{this.state.experiencia}</h3>

                            <p className="clasificacion">
                                <button id="radio1" type="radio" onClick={() => {
                                    this.setState({
                                        value: 1,
                                        experiencia: "Muy insatisfecho"
                                    })
                                }} />
                                <label htmlFor="radio5">★</label>

                                <button id="radio2" type="radio" onClick={() => {
                                    this.setState({
                                        value: 2,
                                        experiencia: " Insatisfecho"
                                    })
                                }} />
                                <label htmlFor="radio4">★</label>

                                <button id="radio3" type="radio" onClick={() => {
                                    this.setState({
                                        value: 3,
                                        experiencia: "Poco Satisfecho"
                                    })
                                }} />
                                <label htmlFor="radio3">★</label>

                                <button id="radio4" type="radio" onClick={() => {
                                    this.setState({
                                        value: 4,
                                        experiencia: "Satisfecho"
                                    })
                                }
                                } />
                                <label htmlFor="radio2">★</label>

                                <button id="radio5" type="radio" onClick={() => {
                                    this.setState({
                                        value: 5,
                                        experiencia: "Muy Satisfecho"

                                    })
                                }} />
                                <label htmlFor="radio1">★</label>


                            </p>
                            <Link to={{
                                pathname: `/MisServicios/`,

                            }}>
                                <button type="button" name="next" className="next action-button" value="Next" onClick={
                                    () => {
                                        this.calificarServicio(this.state.value);
                                        //this.eliminarServicio();
                                    }}>
                                    Finalizar</button>
                            </Link>
                            <button type="button" name="next" className="next action-button" value="Next" onClick={
                                () => {
                                    this.props.volver("container-fluid", false)
                                }}>
                                Volver</button>
                        </fieldset>
                    </div>

                </div>

            </>
        );
    }
} export { Start }; 