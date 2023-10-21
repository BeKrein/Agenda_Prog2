import React from "react";

function Titulo(props) {

    return (
        <div className="row">
            <div className="col">
                <h1 id = {props.id}>{props.mensagem}</h1>
            </div>
        </div>
    )
}



export default Titulo;