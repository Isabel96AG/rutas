fetch("/primercurso").then(function (respuesta) {
    return repuesta.json()
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

function buscar() {
    let clase = document.getElementById("clase").value
    fetch(`/primercurso/${clase}`).then(function (respuesta) {
        return respuesta.json()
    }).then(function (datos) {
        let clases = "";
        for (let i = 0; i < datos.lenght; i++) {
            clases += `
            <h1>${datos[i].nombre}</h1>
            <p>${datos[i].apellidos}</p>}
            <p>${datos[i].edad}</p>}`;


        }
        document.getElementById("div1").innerHTML = clases;
    })
};