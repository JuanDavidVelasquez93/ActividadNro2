const formulario = document.querySelector("#formulario");

formulario.addEventListener( "submit", construirCuento )

function validar() {
    if (document.getElementById("nombre").value === "" || 
        document.getElementById("apellidos").value === "" ||
        document.getElementById("apodo").value === "" ||
        document.getElementById("colorCabello").value === "" ||
        document.getElementById("colorOjos").value === "" ||
        document.getElementById("edad").value === "" ||
        document.getElementById("hobie").value === "") {
        
        alert("Todos los campos son obligatorios");
        return false;
    } else {
        return true;
    }
}

function validarHobie() {
    var hobie = document.getElementById("hobie").value;
    if (hobie.indexOf(" ") !== -1) {
        alert("Solo puedes poner un hobie, ejemplo: pescar, caminar, correr,nadar etc y no debes tener espacios en blanco");
        return false; 
    } else {
        return true;
    }
}

function construirCuento(e) {
    e.preventDefault();

    if (validar() && validarHobie()) { 
        const nombre = document.querySelector("#nombre").value;
        const apellidos = document.querySelector("#apellidos").value;
        const apodo = document.querySelector("#apodo").value;
        const colorCabello = document.querySelector("#colorCabello").value;
        const colorOjos = document.querySelector("#colorOjos").value;
        const edad = document.querySelector("#edad").value;
        const hobie = document.querySelector("#hobie").value;

        const respuesta = document.getElementById("respuesta");
        respuesta.textContent = `Habia una vez un gladiador que se llamaba ${nombre} ${apellidos},
        le decian ${apodo}. El color de su cabello era ${colorCabello} y sus ojos ${colorOjos}.
        A la edad de ${edad} anios ya habia luchado en diferentes reinos, pero su pasatiempo
        favorito era ${hobie}.`;

        formulario.reset(); 
    }
}

