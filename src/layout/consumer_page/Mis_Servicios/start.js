import React, { Component } from 'react';

import '../../global_css/textcolors.css';
import '../../global_css/colors.css';
import '../../global_css/fonts.css';
import './start.css';


class Start extends Component {

    state = {
        value: 0,
        experiencia: ""
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
                            <button type="button" name="next" className="next action-button" value="Next" onClick={
                                () => {
                                    console.log(this.state.value)
                                }}>
                                Finalizar</button>
                            <button type="button" name="next" className="next action-button" value="Next" onClick={
                                () => {
                                    this.props.volver("container-fluid",false)
                                }}>
                                Volver</button>
                        </fieldset>
                    </div>

                </div>

            </>
        );
    }
} export { Start }; 