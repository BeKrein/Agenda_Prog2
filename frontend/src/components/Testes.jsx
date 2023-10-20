import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const colunas = [
    { field: "id", headerName: "id", width: 100 },
    { field: "nome", headerName: "Nome", width: 100}
];

function Testes(props){
    
    return(
        <div className="row">
            {
                    props.cursos.map((curso) =>{
                        return (<div className="col-2">{`${curso.id}: ${curso.nome}`}</div>);
                    })
                }  
            
            <div className="col-8">
                <DataGrid rows={props.cursos} columns={colunas}/>
            </div>
            <div className="col-2"></div>
        </div>
    )
}

export default Testes;