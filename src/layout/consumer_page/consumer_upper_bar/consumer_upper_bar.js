import React, { Component } from 'react';
import './consumer_upper_bar.css';
import shop from "./images/shop.png"
import fire from '../../../config/Fire';
import '../../global_css/colors.css';

class ConsumerUpperbar extends Component {

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="Navegation">
                <div className="d-flex bd-highlight MainColor align-items-center">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <h1 className="text-light  text-font font-italic text-uppercase ">
                            doky
                        </h1>
                    </button>
                    <div className="p-2 bd-highlight"><input className="form-control mr-sm-1 d-none d-sm-block font-weight-bolder" type="search" placeholder="Buscar" aria-label="Search"></input>
                    </div>
                    <div className="p-2 bd-highlight"><button className=" btn btn-outline-light my-2 my-sm-0 d-none d-sm-block font-weight-bolder" type="submit">Buscar</button>
                    </div>
                    <div className="ml-auto p-2 bd-highlight">
                        <button onClick={this.logout} className="MainColor" style={{border: 'none'}}>
                            <img src={shop} className="justify-content-end logo-size" alt="logo" ></img>
                        </button>
                    </div>
                </div>
            </div>

        );
    }
}

export {ConsumerUpperbar}; 