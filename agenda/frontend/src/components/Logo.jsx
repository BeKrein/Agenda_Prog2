import React from "react";
import logo from './../logoUFFS.png';

function Logo(props) {
    return(
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                <img src={logo} alt="Logo UFFS" />
            </div>
            <div className="col-4"></div>
        </div>
    )
}

export default Logo