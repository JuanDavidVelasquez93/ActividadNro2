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
        respuesta.focus();
        const imagen = document.createElement("img");
        imagen.src = "./Img/guerrero.jpg";
        imagen.style.width = "600px"; // Establecer el ancho de la imagen en 300 píxeles
        imagen.style.height = "500px"; 

        respuesta.innerHTML= `<h3 class="text-center fw-light"> Tu cuento</h3><br>`
        
        respuesta.innerHTML += `
        En un reino perdido entre montañas y valles, habitaba un valiente guerrero llamado ${nombre} ${apellidos}, reconocido por todos como ${apodo}. Con su cabello de un profundo color ${colorCabello} y sus ojos brillantes en tono ${colorOjos}, se destacaba entre los demás por su coraje y determinación.<br><br>
        Desde joven, ${nombre} había mostrado una destreza única en el arte de la lucha, entrenando incansablemente para perfeccionar su habilidad con la espada y el arco. Sin embargo, su verdadera pasión residía en su amor por la música y la calma que encontraba al ${hobie}. Entre acordes y melodías, encontraba la paz que el campo de batalla nunca podría ofrecerle.<br><br>
        A los ${edad} años, ya había vivido muchas aventuras y enfrentado numerosos peligros. Pero una inquietud lo invadía, una sensación de que su destino aún no estaba completo. Fue entonces cuando una misteriosa profecía llegó a sus oídos, hablando de un antiguo artefacto perdido en las tierras más allá del horizonte.<br><br>
        `;
        
        respuesta.appendChild(imagen);
        
        respuesta.innerHTML += `<br><br>Con el corazón lleno de valentía y su letal arco como compañero, ${nombre} se embarcó en una búsqueda épica. Atravesando bosques encantados y desiertos desolados, desafiando criaturas míticas y enfrentando desafíos impensables, se adentró en lo desconocido en busca de la verdad detrás de la leyenda.<br><br>
        En su viaje, encontró aliados inesperados y enfrentó adversarios formidables. Pero nunca perdió de vista su objetivo, impulsado por la determinación de un corazón noble y el eco de su música resonando en la noche.<br><br>
        Finalmente, después de muchas pruebas y tribulaciones, ${nombre} llegó al antiguo templo donde se decía que yacía el artefacto perdido. Con un último acorde en su guitarra, abrió las puertas del templo y se enfrentó al desafío final.<br><br>
        Lo que encontró dentro cambió su vida para siempre, pero esa es otra historia por contar en otra ocasión.<br><br>
        Y así, el valiente guerrero ${nombre} ${apellidos} regresó a su tierra natal, no solo como un héroe, sino como un símbolo de coraje, perseverancia y la magia que se encuentra en el corazón de cada canción.
        `;

        formulario.reset(); 
    }

}



