const express = require('express');
const db = require("../config/dbConfig"); // Archivo con la configuración de Firebase
const router = express.Router(); // Crear una instancia de Router

// Endpoint para obtener datos de Firestore
router.get('/getDataFromFirebase', async (req, res) => {
  try {
    const collection = db.collection('TestCollection'); // Cambia 'TestCollection' según tu colección
    const snapshot = await collection.get();

    if (snapshot.empty) {
      return res.status(404).send({ message: 'No se encontraron datos' });
    }

    const data = [];
    snapshot.forEach(doc => {
      data.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).send(data);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    res.status(500).send({ error: 'Error al obtener los datos' });
  }
});

module.exports = router; // Exporta el enrutador
