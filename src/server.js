const express = require('express');
const app = express();
const port = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Servidor backend con Express está funcionando!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log("Servidor escuchando en http://localhost:${port}");
});