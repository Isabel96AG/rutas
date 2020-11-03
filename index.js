const express = require("express");
const primercurso = require("./primercurso");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.get("/primercurso", function (req, res) {
    console.log(primercurso);
    res.send(primercurso);
});
app.get("/primercurso/:clase", function (req, res) {
    let clase = req.params.clase;
    if (primercurso[clase] === claseuno && primercurso[clase] === clasedos) {

        res.send(primercurso[clase]);
    } else {
        res.send("No existe esa clase");
    }

});
app.get("/primercurso/:clase", function (req, res) {
    let clase = req.params.clase;
    if (primercurso[aula] !== undefined) {
        res.send(primercurso[clase]);
    } else {
        res.send("No existe esa clase");
    }
});

app.post("/primercurso/:clase", function (req, res) {
    let clase = req.body.clase;
    let nombre = req.body.nombre;
    let apellidos = req.body.apellidos;
    let edad = req.body.edad;
    let alumno = {
        nombre: nombre,
        apellidos: apellidos,
        edad: edad,
    };
    primercurso[clase].push(alumno);
    res.send(primercurso);
});


app.listen(3000);