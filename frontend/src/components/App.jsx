import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Titulo from "./Titulo";
import Botao from "./Button";
import Curso from "./Curso";
import Testes from "./Testes";


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
            {/*console.log(query.data);*/ }
        });
        res = axios.get("/cursos");
        console.log(res);
        res.then((query) => {
            setListaCursos(query.data);
            console.log(query.data);
        });
    }, []);



    return (

        <div className="container-lg">
            <div className="row">
                <Titulo mensagem="Cursos" />
                <div className="col-4">
                    <Button variant="contained" href="#cc">Ciencia da Computação</Button>
                </div>
                <div className="col-4">
                    <Button variant="contained" href="#cc">Ciencia da Computação</Button>
                </div>
                <div className="col-4">
                    <Button variant="contained" href="#cc">Ciencia da Computação</Button>
                </div>
            </div>
            <div>
                <Botao msg="Follow"></Botao>
            </div>
            <Curso
                cursos={listaCursos}
                horarios={listaHorarios} />
        </div>
    );
}

export default App;
