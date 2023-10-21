// src/models/User.js

const { db } = require('../firebaseConfig');

exports.getAll = async () => {
  const snapshot = await db.collection('users').get();
  return snapshot.docs.map(doc => doc.data());
};

exports.getById = async (id) => {
  const doc = await db.collection('users').doc(id).get();
  return doc.exists ? doc.data() : null;
};

exports.create = async (userData) => {
  const docRef = await db.collection('users').add(userData);
  return docRef.id;
};

exports.update = async (id, newData) => {
  await db.collection('users').doc(id).update(newData);
};

exports.delete = async (id) => {
  await db.collection('users').doc(id).delete();
};
