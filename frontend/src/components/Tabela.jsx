import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const colunas = [
    { field: "id", headerName: "id", width: 100 },
    { field: "hor", headerName: "Horarios", width: 100 },
    { field: "seg", headerName: "Segunda", width: 100 },
    { field: "ter", headerName: "Terça", width: 100 },
    { field: "qua", headerName: "Quarta", width: 100 },
    { field: "qui", headerName: "Quinta", width: 100 },
    { field: "sex", headerName: "Sexta", width: 100 },
    { field: "sab", headerName: "Sabado", width: 100 }
];

function Tabela(props) {
    return(
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <DataGrid rows={props.infos} columns={colunas}/>
            </div>
            <div className="col-2"></div>
        </div>
    )
}

export default Tabela;