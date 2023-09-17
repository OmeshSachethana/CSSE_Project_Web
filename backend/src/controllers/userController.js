const db = require('../firebaseConfig');
const User = require('../models/User');

exports.getUsers = async (req, res) => {
  const snapshot = await db.collection('Users').get();
  let users = [];
  snapshot.forEach(doc => {
    let id = doc.id;
    let userData = doc.data();
    let user = new User(id, userData.name, userData.age, userData.address);
    users.push(user);
  });
  res.send(users);
};

// exports.addUser = async (req, res) => {
//   const docRef = db.collection('Users').doc();
//   await docRef.set(req.body);
//   res.send('User added with ID: ' + docRef.id);
// };

exports.addUser = async (req, res) => {
  const { name, age, address } = req.body;
  const docRef = db.collection('Users').doc();
  await docRef.set({ name, age, address });
  res.send('User added with ID: ' + docRef.id);
};


exports.updateUser = async (req, res) => {
  const docRef = db.collection('Users').doc(req.params.id);
  await docRef.update(req.body);
  res.send('User updated with ID: ' + req.params.id);
};

exports.deleteUser = async (req, res) => {
  const docRef = db.collection('Users').doc(req.params.id);
  await docRef.delete();
  res.send('User deleted with ID: ' + req.params.id);
};
