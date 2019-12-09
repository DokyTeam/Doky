import React, { Component } from 'react';

import '../../../global_css/textcolors.css';
import '../../../global_css/colors.css';
import '../../../global_css/fonts.css';

class Chat extends Component {

    chat = (number) => {
        let table = []
        for (let i = 0; i < number; i++) {
            if (i % 2 === 0) {
                table.push(


                    <div key={i} >
                        <br />
                        <p className="AltBackgroundColor" style={{ textAlign: "left",marginRight:"15%" }} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                </p>
                    </div>
                );
            } else {
                table.push(
                    <div key={i}>
                        <br />
                        <p className= "WhiteColor" style={{ textAlign: "right" ,marginLeft:"15%"  }} >
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
                     </p>
                    </div>
                );
            }
        }
        return table
    }

    render() {

        return (
            <>
                <p className="MediumTextFont BigTextFont TextDarkMainColor ">Chat</p>
                <div style={{
                    maxHeight: 300,
                    position: "relative",
                    overflowY: "scroll"
                }}>
                    <div data-spy="scroll" data-offset="0" >
                        
                        {this.chat(8)}
                    </div>

                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Mensaje" aria-label="Mensaje" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Enviar</button>
                    </div>
                </div>
            </>
        );
    }
}
export { Chat }