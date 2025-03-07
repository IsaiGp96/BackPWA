const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());


// Middleware para manejar JSON (asegúrate de agregarlo antes de las rutas)
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const GetDataFromFireBase = require("../src/Controller/dbController")
const AddComment = require("../src/Controller/dbController")
const GetCommentsFromFireBase = require("../src/Controller/dbController")

//
app.use("/api", GetDataFromFireBase)
app.use("/api", AddComment)
app.use("/api", GetCommentsFromFireBase)


// EndPoint para obtener datos de la base de datos

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
