function crear() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = parseInt(document.getElementById("edad").value);
    let clase = document.getElementById("clase").value;
    let alumno = {
        nombre: nombre,
        apellidos: apellidos,
        edad: edad,
        clase: clase,
    };
    fetch("/primercurso", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(alumno),

    }).then(function (res) {
        return res.json()
    }).then(function (datos) {

        let claseuno = "";
        let clasedos = "";
        for (let i = 0; i < datos.claseuno.lenght; i++) {
            claseuno += `
<h1>${datos.claseuno[i].nombre}</h1>
<p>Apellidos:${datos.claseuno[i].apellidos}</p>
<p>Edad:${datos.claseuno[i].edad}</p>`;
        };
        for (let i = 0; i < datos.clasedos.lenght; i++) {
            clasedos += `
<h1>${datos.clasedos[i].nombre}</h1>
<p>Apellidos:${datos.clasedos[i].apellidos}</p>
<p>Edad:${datos.clasedos[i].edad}</p>`;
        }
        document.getElementById("div1").innerHTML = claseuno + clasedos;

    });
};