const db = require('../firebaseConfig');

class Product {
  constructor(description, imageUrl, name, price, type) {
    this.description = description;
    this.imageUrl = imageUrl;
    this.name = name;
    this.price = price;
    this.type = type;
  }

  static async getAll() {
    const snapshot = await db.collection('products').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  static async getById(id) {
    const doc = await db.collection('products').doc(id).get();
    return { id: doc.id, ...doc.data() };
  }
}

module.exports = Product;
