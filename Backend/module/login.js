const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  address: String,
  foodItem:String,
  quantity:Number,
  orderDate: String,
  ordertime:String,
  payment: String,
  notes: String
});

module.exports = mongoose.model('login', loginSchema);
