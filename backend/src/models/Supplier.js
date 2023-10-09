const db = require('../firebaseConfig');

class Supplier {
  constructor(name, contactName, telephone, email) {
    this.name = name;
    this.contactName = contactName;
    this.telephone = telephone;
    this.email = email;
  }

  static async getAll() {
    const snapshot = await db.collection('suppliers').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  static async getById(id) {
    const doc = await db.collection('suppliers').doc(id).get();
    return { id: doc.id, ...doc.data() };
  }

  static async create(supplierData) {
    const docRef = await db.collection('suppliers').add(supplierData);
    return docRef.id;
  }

  static async update(id, newData) {
    await db.collection('suppliers').doc(id).update(newData);
  }

  static async delete(id) {
    await db.collection('suppliers').doc(id).delete();
  }
}

module.exports = Supplier;
