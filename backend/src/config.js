const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyAQz8hMQ3WtODKX3pkcckpcZDXCtGRITPI",
    authDomain: "constro-77f9b.firebaseapp.com",
    projectId: "constro-77f9b",
    storageBucket: "constro-77f9b.appspot.com",
    messagingSenderId: "1025273190836",
    appId: "1:1025273190836:web:1ad5d3b24355c8950a3ae1",
    measurementId: "G-PXSKV4G0VR"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection('Users');

module.exports = User;