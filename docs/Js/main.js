


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

/* Modal
// Ingrese su nombre al usuario y saludarlo.
const $exer1Form = document.getElementById('exer1Form');
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

$exer1Form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Hola, ${$exer1Form.name.value}!, diviertete!`, 'success');
});

const alert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
    ].join('');

    alertPlaceholder.append(wrapper);
};*/

