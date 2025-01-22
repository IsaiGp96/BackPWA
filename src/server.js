const express = require('express');
const app = express();
const port = 3000;

//
const GetDataFromFireBase = require("../src/Controller/dbController")

//
app.use("/api", GetDataFromFireBase)


// Middleware para manejar JSON (asegúrate de agregarlo antes de las rutas)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// EndPoint para obtener datos de la base de datos

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
