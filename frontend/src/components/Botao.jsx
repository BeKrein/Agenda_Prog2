import React from "react";
import { Button } from "@mui/material";

function Botao(props) {

    const botoes = [];

    props.nomes.map((curso) => {

        var referencia = "#" + curso.id;
        botoes.push(
            <div className="col-4">
                <Button variant="contained" href={referencia}>{curso.nome}</Button>
            </div>
        );
    });

    return botoes;
}

export default Botao;