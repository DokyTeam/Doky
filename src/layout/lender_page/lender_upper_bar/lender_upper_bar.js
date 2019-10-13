import React, { Component } from 'react';
import './lender_upper_bar.css';
import shop from "./images/shop.png"
import '../../global_css/colors.css';

class LenderUpperbar extends Component {

    render() {
        return (
            <div className="Navegation">
                <div className="d-flex bd-highlight MainColor align-items-center">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <h3 className="text-light  text-font font-italic text-uppercase ">
                            prestador
                        </h3>
                    </button>
                    <div className="p-2 bd-highlight"><input className="form-control mr-sm-1 d-none d-sm-block font-weight-bolder" type="search" placeholder="Buscar" aria-label="Search"></input>
                    </div>
                    <div className="p-2 bd-highlight"><button className=" btn btn-outline-light my-2 my-sm-0 d-none d-sm-block font-weight-bolder" type="submit">Buscar</button>
                    </div>
                    <div className="ml-auto p-2 bd-highlight">
                        <button onClick={this.props.MainContainerhandler.bind(this, true)} className="MainColor" style={{border: 'none'}}>
                            <img src={shop} className="ustify-content-end logo-size" alt="logo" ></img>
                        </button>
                    </div>
                </div>
            </div>

        );
    }
}

export {LenderUpperbar}; 