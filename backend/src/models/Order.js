const { db } = require("../firebaseConfig");

class Order {
  constructor(
    date,
    image,
    name,
    description,
    price,
    quantity,
    totalPrice,
    approveStatus
  ) {
    this.date = date;
    this.image = image;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
    this.approveStatus = approveStatus;
  }

  static async getAll() {
    const snapshot = await db.collection("orders").get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  static async getById(id) {
    const doc = await db.collection("orders").doc(id).get();
    return { id: doc.id, ...doc.data() };
  }

  static async create(orderData) {
    const docRef = await db.collection("orders").add(orderData);
    return docRef.id;
  }

  static async update(id, newData) {
    await db.collection("orders").doc(id).update(newData);
  }
}

module.exports = Order;
