const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

console.log('Initializing Firebase Admin SDK');

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  const db = admin.firestore();

  console.log('Firebase Admin SDK initialized');

  module.exports = { admin, db };
} catch (error) {
  console.error('Error initializing Firebase Admin SDK', error);
}
