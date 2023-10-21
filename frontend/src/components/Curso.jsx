import React from "react";
import Titulo from "./Titulo";
import Tabela from "./Tabela";
import { Card } from "@mui/material";

function Curso(props) {
    return (
        <div className="row">
                {
                    props.cursos.map((curso) => {
                        return (
                            <div className="row">
                                <div className="col-4"/>
                                <div className="col-4">
                                    <Titulo id={curso.id} mensagem={curso.nome} />
                                </div>
                                <div className="col-4"/>
                                <div className="col-1"/>
                                <div className="col-10">
                                    {/* usar um for */}
                                    <Tabela infos={props.horarios.filter((horario) => horario.cursoId === curso.id)} />
                                </div>
                                <div className="col-1"/>
                            </div>
                        );
                    })
                }
        </div>
    );
}

export default Curso;