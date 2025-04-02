const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());
const path = require("path");

// Servir imágenes estáticas directamente desde la carpeta "assets"
app.use(express.static(path.join(__dirname, "/assets")));

// Middleware para manejar JSON (asegúrate de agregarlo antes de las rutas)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const GetDataFromFireBase = require("./src/Controller/dbController")
const AddComment = require("./src/Controller/dbController")
const GetCommentsFromFireBase = require("./src/Controller/dbController")
const GetImageFromBackend = require ("./src/Controller/dbController")

//
app.use("/api", GetDataFromFireBase)
app.use("/api", AddComment)
app.use("/api", GetCommentsFromFireBase)
app.use("/api", GetImageFromBackend)

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
