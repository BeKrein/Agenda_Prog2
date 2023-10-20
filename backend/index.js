const express = require("express");
const cors = require("cors");

const database = {

    horarios: [
        { id: 1, cursoId:1, hor: "10:10", seg: "teste", ter: "edimar@uffs.edu.br" },
        { id: 2, cursoId:1, hor: "11:00", seg: "123", ter: "gian@uffs.edu.br" },
        { id: 3, cursoId:1, hor: "13:30", seg: "Gian", ter: "gian@uffs.edu.br" },
        { id: 4, cursoId:1, hor: "14:20", seg: "Gian", ter: "gian@uffs.edu.br" },
        { id: 5, cursoId:1, hor: "15:10", seg: "Gian", ter: "gian@uffs.edu.br" },
        { id: 6, cursoId:1, hor: "16:10", seg: "Gian", ter: "gian@uffs.edu.br" },
        { id: 7, cursoId:1, hor: "17:00", seg: "Ultimo", ter: "gian@uffs.edu.br" },
        { id: 8, cursoId:1, hor: "19:00", seg: "", ter: ""},
        { id: 9, cursoId:1, hor: "19:50"},
        { id: 10, cursoId:1, hor: "21:00"},
        { id: 11, cursoId:1, hor: "21:50"},

        { id: 12, cursoId:2, hor: "10:10", seg: "calculo", ter: "edimar@uffs.edu.br" },
        { id: 13, cursoId:2, hor: "11:00", seg: "123", ter: "gian@uffs.edu.br" },
        { id: 14, cursoId:2, hor: "13:30", seg: "Gian", ter: "gian@uffs.edu.br" },
        { id: 15, cursoId:2, hor: "14:20", seg: "Gian", ter: "gian@uffs.edu.br" },
        { id: 16, cursoId:2, hor: "15:10", seg: "Gian", ter: "gian@uffs.edu.br" },
        { id: 17, cursoId:2, hor: "16:10", seg: "Gian", ter: "gian@uffs.edu.br" },
        { id: 18, cursoId:2, hor: "17:00", seg: "Ultimo", ter: "gian@uffs.edu.br" },
        { id: 19, cursoId:2, hor: "19:00", seg: "", ter: ""},
        { id: 20, cursoId:2, hor: "19:50"},
        { id: 21, cursoId:2, hor: "21:00"},
        { id: 22, cursoId:2, hor: "21:50"}
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
