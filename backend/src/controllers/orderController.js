const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const orderData = req.body;
    const id = await Order.create(orderData);
    res.json({ id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
