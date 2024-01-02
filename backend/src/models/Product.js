const { db } = require('../firebaseConfig');

class Product {
  constructor(name, type, price, description, imageUrl) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  static async getAll() {
    const snapshot = await db.collection('products').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  static async getById(id) {
    const doc = await db.collection('products').doc(id).get();
    return { id: doc.id, ...doc.data() };
  }

  static async create(productData) {
    const docRef = await db.collection('products').add(productData);
    return docRef.id;
  }

  static async update(id, newData) {
    await db.collection('products').doc(id).update(newData);
  }

  static async delete(id) {
    await db.collection('products').doc(id).delete();
  }
}

module.exports = Product;
