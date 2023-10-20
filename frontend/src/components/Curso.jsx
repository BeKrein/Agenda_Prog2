import React from "react";
import Titulo from "./Titulo";
import Tabela from "./Tabela";
import { Card } from "@mui/material";

function Curso(props) {
    console.log(props);
    return (
        <div className="row">
            <div className="col-4">
                <Titulo mensagem="aaaaa"></Titulo>
                {
                    props.cursos.map((curso) => {
                        return (
                            <div>
                                <Titulo id={curso.id} mensagem={curso.nome} />
                                <Tabela infos={props.horarios.filter((horario) => horario.cursoId === curso.id)} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Curso;