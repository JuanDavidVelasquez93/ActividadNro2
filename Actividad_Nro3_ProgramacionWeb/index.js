const express = require('express');

const path = require('path');
const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    port: '3308',
    database: 'tiendaOnline',
    user: 'root',
    password: 'Nueveonce.911'

});

const app = express();
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, 'public'), { index: false }));
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.get("/", function(req,res){
    res.render("formularioCliente")
})

app.post("/formulario2", function(req, res) {
    const datos = req.body;
    
    let nombre = datos.nombre;
    let apellidos = datos.apellidos;
    let correo = datos.correo;
    let celular = datos.celular; 
    let servicio = datos.Servi;

    if (!nombre || !apellidos || !correo) {
        res.status(400).send("Todos los campos son obligatorios");
        return;
    }

    if (isNaN(celular) || celular === "") {
        res.status(400).send("El campo celular debe ser un valor numérico.");
        return;
    }

    let insertar = "INSERT INTO Cliente (nombre, apellidos, correo, celular, servicio) VALUES ('"+ nombre+"','"+ apellidos+"','"+ correo+"','"+ celular+"','"+ servicio+"')";
    connection.query(insertar, function(err) {
        if (err) {
            res.status(500).send("Error al insertar datos en la base de datos");
            return;
        }
        res.status(200).send("Datos insertados correctamente en la base de datos");
    });
});

app.get("/clientes", function (req, res) {
    let consulta = "select * from Cliente order by nombre";
    connection.query(consulta, function (err, resultados) {
        if (err) {
            res.status(500).send("Error al obtener datos de la base de datos");
            return;
        }
        res.render("listadoClientes", { clientes: resultados });
    });
});

app.listen(3000, function(){
    console.log("servidor creado http://localhost:3000");
});

