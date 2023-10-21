import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { tableBodyClasses } from "@mui/material";

const colunas = [
    { field: "hor", headerName: "Horarios", width: 110 },
    { field: "seg", headerName: "Segunda", width: 110 },
    { field: "ter", headerName: "Terça", width: 110 },
    { field: "qua", headerName: "Quarta", width: 110 },
    { field: "qui", headerName: "Quinta", width: 110 },
    { field: "sex", headerName: "Sexta", width: 110 },
];


function Tabela(props) {

    const tabelas = [];

    for (var i = 1; i < 10; i++) {
        if ((props.infos.filter((teste) => teste.semestre === i)) == 0){
            return tabelas;
        }
        tabelas.push(
            <div className="row">
                <h2>{i}º Semestre:</h2>
                <DataGrid rows={props.infos.filter((teste) => teste.semestre === i)} columns={colunas} />
            </div>
        )
    }
    return tabelas;

}

export default Tabela;