const express = require("express");
const cors = require("cors");

const database = {

    horarios: [
        { id: 1, cursoId:1, semestre: 1, hor: "10:10", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 2, cursoId:1, semestre: 1, hor: "11:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 3, cursoId:1, semestre: 1, hor: "13:30", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 4, cursoId:1, semestre: 1, hor: "14:20", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 5, cursoId:1, semestre: 1, hor: "15:10", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 6, cursoId:1, semestre: 1, hor: "16:10", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 7, cursoId:1, semestre: 1, hor: "17:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 8, cursoId:1, semestre: 1, hor: "19:00", seg: "GCH293", ter: "GEX208" , qua: "GEX213", qui: "GEX003", sex: "GEX210"},
        { id: 9, cursoId:1, semestre: 1, hor: "19:50", seg: "GCH293", ter: "GEX208" , qua: "GEX213", qui: "GEX003", sex: "GEX210"},
        { id: 10, cursoId:1, semestre: 1, hor: "21:00", seg: "GCH293", ter: "GEX208" , qua: "GEX213", qui: "GEX003", sex: "GEX210"},
        { id: 11, cursoId:1, semestre: 1, hor: "21:50", seg: "GCH293", ter: "GEX208" , qua: "GEX213", qui: "GEX003", sex: "GEX210"},

         { id: 1, cursoId:1, semestre: 2, hor: "10:10", seg: "", ter: "" , qua: "", qui: "", sex: ""},
         { id: 2, cursoId:1, semestre: 2, hor: "11:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
         { id: 3, cursoId:1, semestre: 2, hor: "13:30", seg: "GEX178", ter: "GEN253" , qua: "GEX195", qui: "GEX605", sex: "GEX055"},
         { id: 4, cursoId:1, semestre: 2, hor: "14:20", seg: "GEX178", ter: "GEN253" , qua: "GEX195", qui: "GEX605", sex: "GEX055"},
         { id: 5, cursoId:1, semestre: 2, hor: "15:10", seg: "GEX178", ter: "GEN253" , qua: "GEX195", qui: "GEX605", sex: "GEX055"},
         { id: 6, cursoId:1, semestre: 2, hor: "16:10", seg: "GEN253", ter: "GEX605" , qua: "GEX178", qui: "GEX055", sex: "GEX195"},
         { id: 7, cursoId:1, semestre: 2, hor: "17:00", seg: "GEN253", ter: "GEX605" , qua: "GEX178", qui: "GEX055", sex: "GEX195"},
         { id: 8, cursoId:1, semestre: 2, hor: "19:00", seg: "GEX605", ter: "" , qua: "GLA104", qui: "", sex: ""},
         { id: 9, cursoId:1, semestre: 2, hor: "19:50", seg: "GEX605", ter: "" , qua: "GLA104", qui: "", sex: ""},
         { id: 10, cursoId:1, semestre: 2, hor: "21:00", seg: "GEX605", ter: "" , qua: "GLA104", qui: "", sex: ""},
         { id: 11, cursoId:1, semestre: 2, hor: "21:50", seg: "GEX605", ter: "" , qua: "GLA104", qui: "", sex: ""},

        { id: 1, cursoId:1, semestre: 3, hor: "10:10", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 2, cursoId:1, semestre: 3, hor: "11:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 3, cursoId:1, semestre: 3, hor: "13:30", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 4, cursoId:1, semestre: 3, hor: "14:20", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 5, cursoId:1, semestre: 3, hor: "15:10", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 6, cursoId:1, semestre: 3, hor: "16:10", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 7, cursoId:1, semestre: 3, hor: "17:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 8, cursoId:1, semestre: 3, hor: "19:00", seg: "GEX098", ter: "GEX392" , qua: "GEX608", qui: "GEX606", sex: "GEX609"},
        { id: 9, cursoId:1, semestre: 3, hor: "19:50", seg: "GEX098", ter: "GEX392" , qua: "GEX608", qui: "GEX606", sex: "GEX609"},
        { id: 10, cursoId:1, semestre: 3, hor: "21:00", seg: "GEX098", ter: "GEX392" , qua: "GEX608", qui: "GEX606", sex: "GEX609"},
        { id: 11, cursoId:1, semestre: 3, hor: "21:50", seg: "GEX098", ter: "GEX392" , qua: "GEX608", qui: "GEX606", sex: "GEX609"},

        { id: 1, cursoId:1, semestre: 4, hor: "10:10", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 2, cursoId:1, semestre: 4, hor: "11:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 3, cursoId:1, semestre: 4, hor: "13:30", seg: "GEX612", ter: "GEN254" , qua: "GEX090", qui: "GEX102", sex: "GEX613"},
        { id: 4, cursoId:1, semestre: 4, hor: "14:20", seg: "GEX612", ter: "GEN254" , qua: "GEX090", qui: "GEX102", sex: "GEX613"},
        { id: 5, cursoId:1, semestre: 4, hor: "15:10", seg: "GEX612", ter: "GEN254" , qua: "GEX090", qui: "GEX102", sex: "GEX613"},
        { id: 6, cursoId:1, semestre: 4, hor: "16:10", seg: "GEX613", ter: "GEX102" , qua: "GEX612", qui: "GEN254", sex: "GEX090"},
        { id: 7, cursoId:1, semestre: 4, hor: "17:00", seg: "GEX613", ter: "GEX102" , qua: "GEX612", qui: "GEN254", sex: "GEX090"},
        { id: 8, cursoId:1, semestre: 4, hor: "19:00", seg: "", ter: "" , qua: "GCH290", qui: "", sex: ""},
        { id: 9, cursoId:1, semestre: 4, hor: "19:50", seg: "", ter: "" , qua: "GCH290", qui: "", sex: ""},
        { id: 10, cursoId:1, semestre: 4, hor: "21:00", seg: "", ter: "" , qua: "GCH290", qui: "", sex: ""},
        { id: 11, cursoId:1, semestre: 4, hor: "21:50", seg: "", ter: "" , qua: "GCH290", qui: "", sex: ""},

        { id: 1, cursoId:2, semestre: 1, hor: "10:10", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 2, cursoId:2, semestre: 1, hor: "11:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 3, cursoId:2, semestre: 1, hor: "13:30", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 4, cursoId:2, semestre: 1, hor: "14:20", seg: "", ter: "" , qua: "Materia de Matematica", qui: "", sex: ""},
        { id: 5, cursoId:2, semestre: 1, hor: "15:10", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 6, cursoId:2, semestre: 1, hor: "16:10", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 7, cursoId:2, semestre: 1, hor: "17:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 8, cursoId:2, semestre: 1, hor: "19:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 9, cursoId:2, semestre: 1, hor: "19:50", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 10, cursoId:2, semestre: 1, hor: "21:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 11, cursoId:2, semestre: 1, hor: "21:50", seg: "", ter: "" , qua: "", qui: "", sex: ""},

        { id: 1, cursoId:2, semestre: 2, hor: "10:10", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 2, cursoId:2, semestre: 2, hor: "11:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 3, cursoId:2, semestre: 2, hor: "13:30", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 4, cursoId:2, semestre: 2, hor: "14:20", seg: "", ter: "" , qua: "Materia de Matematica", qui: "", sex: ""},
        { id: 5, cursoId:2, semestre: 2, hor: "15:10", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 6, cursoId:2, semestre: 2, hor: "16:10", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 7, cursoId:2, semestre: 2, hor: "17:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 8, cursoId:2, semestre: 2, hor: "19:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 9, cursoId:2, semestre: 2, hor: "19:50", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 10, cursoId:2, semestre: 2, hor: "21:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 11, cursoId:2, semestre: 2, hor: "21:50", seg: "", ter: "" , qua: "", qui: "", sex: ""},

        { id: 1, cursoId:3, semestre: 1, hor: "10:10", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 2, cursoId:3, semestre: 1, hor: "11:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 3, cursoId:3, semestre: 1, hor: "13:30", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 4, cursoId:3, semestre: 1, hor: "14:20", seg: "Materia de Letras", ter: "" , qua: "", qui: "", sex: ""},
        { id: 5, cursoId:3, semestre: 1, hor: "15:10", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 6, cursoId:3, semestre: 1, hor: "16:10", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 7, cursoId:3, semestre: 1, hor: "17:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 8, cursoId:3, semestre: 1, hor: "19:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 9, cursoId:3, semestre: 1, hor: "19:50", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 10, cursoId:3, semestre: 1, hor: "21:00", seg: "", ter: "" , qua: "", qui: "", sex: ""},
        { id: 11, cursoId:3, semestre: 1, hor: "21:50", seg: "", ter: "" , qua: "", qui: "", sex: ""}
    ],

    cursos : [
        {id: 1, nome:"Ciência da Computação",},
        {id: 2, nome:"Matematica"},
        {id: 3, nome:"Letras"}
    ],

};

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3010, () => console.log("Servidor rodando na porta 3010."));

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.get("/horarios", (req, res) => {
    try {
        res.json(database.horarios).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/horarios", (req, res) => {
    try {
        const horariosId = parseInt(req.query.id);
        console.log(`Retornando ID: ${horariosId}`);
        res.json(database.horarios[horariosId - 1]).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/cursos", (req, res) => {
    try {
        res.json(database.cursos).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.get("/curso", (req, res) => {
    try {
        const cursosId = parseInt(req.query.id);
        console.log(`Retornando ID: ${cursosId}`);
        res.json(database.cursos[cursosId - 1]).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});
