const fotos = document.querySelectorAll('.moto');
let fotoAtiva = 0;

function voltarFoto() {
    fotoAtiva -= 1;

    if (fotoAtiva < 0) fotoAtiva = 0;

    fotos[fotoAtiva].scrollIntoView({ behavior: "smooth" });
}

function avancarFoto() {
    fotoAtiva += 1;

    if (fotoAtiva > fotos.length - 1) fotoAtiva = fotos.length - 1;

    fotos[fotoAtiva].scrollIntoView({ behavior: "smooth" });
}