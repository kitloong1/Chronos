const mongoose = require('mongoose');
require('dotenv').config();
const { Schema } = mongoose;

// UNCOMMENT THE LINE BELOW AND REPLACE WITH AN ACTUAL MONGODB URI FOR YOUR "ORDERS" DATABASE
// require('./chronos-config'); // Bring in config file
const myURI = process.env.ORDER_URI;
// const myURI = 'mongodb+srv://johndoe:johndoe@cluster0-abcdef.mongodb.net/';

mongoose.connect(myURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected!!!********* Order Database is live!!!'))
  .catch((err) => console.log('Connection Error ', err));

const OrderSchema = new Schema({
  customerID: {
    type: Number,
    required: true,
  },
  bookID: {
    type: Number,
    required: true,
  },
  purchaseDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  deliveryDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const OrderModel = mongoose.model('OrderModel', OrderSchema);

module.exports = OrderModel;
