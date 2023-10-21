import React from "react";
import { Button } from "@mui/material";

function BotaoFollow() {

    const [textoBotao, setTextobotão] = React.useState(["Follow"]);

    function ativado() {
        if (textoBotao === "Follow") {
            setTextobotão("Following");
            console.log("Recebi um Follow");
        }
        else {
            setTextobotão("Follow");
            console.log("Recebi um Unfollow");
        }
    }

    return (
        <div className="row">
            <div className="col-4" />
            <div className="col-4">
                <Button variant="contained" onClick={ativado}>{textoBotao}</Button>
            </div>
            <div className="col-4" />
        </div>
    );
}

export default BotaoFollow;