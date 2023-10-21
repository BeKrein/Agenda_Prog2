import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Titulo from "./Titulo";
import Botao from "./Botao";
import Curso from "./Curso";
import Logo from "./Logo";
import BotaoFollow from "./BotaoFollow";


axios.defaults.baseURL = "http://localhost:3010";
axios.defaults.headers.common["Content-Type"] =
    "application/json;charset=utf-8";

function App() {

    const [listaHorarios, setListaHorarios] = React.useState([]);
    const [listaCursos, setListaCursos] = React.useState([]);

    React.useEffect(() => {
        let res = axios.get("/horarios");
        res.then((query) => {
            setListaHorarios(query.data);
        });
        res = axios.get("/cursos");
        res.then((query) => {
            setListaCursos(query.data);
        });
    }, []);


    return (
        <div className="container-lg">
            <div className="row">
                <Logo />
                <div className="col-4" />
                <div className="col-4">
                    <Titulo mensagem="Cursos" />
                </div>
                <div className="col-4" />
                <Botao nomes={listaCursos} />
                <BotaoFollow />
            </div>
            <div className="row">
                <Curso cursos={listaCursos} horarios={listaHorarios} />
            </div>
        </div>
    );
}

export default App;
