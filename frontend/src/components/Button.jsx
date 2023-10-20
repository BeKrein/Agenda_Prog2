import React from "react";
import { Button } from "@mui/material";

function Botao(props){
    
    return(
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                <Button variant = "contained">{props.msg}</Button>
            </div>
            <div className="col-4"></div>
        </div>
    );
}

export default Botao;