const express = require('express');
const db = require("../config/dbConfig"); // Archivo con la configuración de Firebase
const router = express.Router(); // Crear una instancia de Router

// Endpoint para obtener Puntuaciones de Firestore
router.get('/getDataFromFirebase', async (req, res) => {
  try {
    const collection = db.collection('Usuarios'); // Cambia 'TestCollection' según tu colección
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

// Endpoint para insertar un comentario en Firestore
router.post('/addComment', async (req, res) => {
  try {
    const { username, email, comentario } = req.body; // Extraer datos del request

    // Validación de campos requeridos
    if (!username || !email || !comentario) {
      return res.status(400).send({ error: 'Todos los campos son requeridos' });
    }

    // Crear referencia a la colección 'Comentarios' con ID autogenerado
    const newCommentRef = db.collection('Comentarios').doc();

    // Guardar el comentario en Firestore
    await newCommentRef.set({
      username,
      email,
      comentario,
      fecha: new Date().toISOString() // Guardar fecha de creación
    });

    res.status(201).send({ message: 'Comentario agregado con éxito', id: newCommentRef.id });
  } catch (error) {
    console.error('Error al agregar comentario:', error);
    res.status(500).send({ error: 'Error al agregar comentario' });
  }
});

// Endpoint para obtener comentarios de Firestore
router.get('/getCommentsFromFirebase', async (req, res) => {
  try {
    const collection = db.collection('Comentarios'); // Cambia 'TestCollection' según tu colección
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
