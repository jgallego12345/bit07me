function seleccionar(link) {
    var opciones = document.querySelector('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
    /* Desaparecer menu en responsive*/
    var x = document.getElementById("nav");
    x.className = "";
}


/* Menu responsive */
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = newFunction();
    } else {
        x.className = "";
    }

    function newFunction() {
        return "responsive";
    }
}

/*Seccion de Habilidades*/
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getClientRects().top;
    if (distancia - skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");

    }
}