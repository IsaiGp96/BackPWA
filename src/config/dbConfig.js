// Inicializa Firebase Admin SDK con la clave de servicio

    const serviceAccount = require('./testc78b75firebaseadminsdk.json');
    const admin = require('firebase-admin');

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    
    const db = admin.firestore();

    module.exports = db


