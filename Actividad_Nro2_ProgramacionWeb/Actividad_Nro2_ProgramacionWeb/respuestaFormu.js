const formulario2 = document.getElementById("formulario2");

formulario2.addEventListener("submit", tabla);

function validar() {
    if (document.getElementById("nombre").value === "" || 
        document.getElementById("apellidos").value === "" ||
        document.getElementById("correo").value === "")
         {
        alert("Todos los campos son obligatorios");
        return false;
    } else {
        return true;
    }
}

function validarCelular() {
    const valor = document.getElementById("celular").value;
    if (isNaN(valor) || valor === "") {
        alert("El campo celular debe ser un valor numérico.");
        return false;
    } else {
        return true;
    }
}

function tabla(e) {
    e.preventDefault();

    if (validar() && validarCelular()) {
        const nombre = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellidos").value;
        const correo = document.getElementById("correo").value;
        const celular = document.getElementById("celular").value; 
        const servicio = document.getElementById("Servi").value;

        const tablaHTML = `
        <html>
        <head>
            <title>Tabla de Datos</title>
            <link rel="stylesheet" type="text/css" href="styles.css">
        </head>
        <body>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Correo electronico</th>
                            <th>Celular</th>
                            <th>Servicio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${nombre}</td>
                            <td>${apellidos}</td>
                            <td>${correo}</td>
                            <td>${celular}</td>
                            <td>${servicio}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
        </html> 
        `;

        const nuevaPestana = window.open('', '_blank');
        nuevaPestana.document.open();
        nuevaPestana.document.write(tablaHTML);
        nuevaPestana.document.close();
        formulario2.reset(); 
    }
}