const db = require("../firebaseConfig");

class Order {
  constructor(date, image, name, description, price, quantity, totalPrice, approveStatus) {
    this.date = date
    this.image = image;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.totalPrice = totalPrice
    this.approveStatus = approveStatus;
  }

  static async create(orderData) {
    const docRef = await db.collection("orders").add(orderData);
    return docRef.id;
  }
}

module.exports = Order;