const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: 'string',
    required: true
  },
  password: {    // password should be hashed, this example just keep it simple 
    type: 'string',
    required: true
  }
});

const itemSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true
  },
  rate: {
    type: 'Decimal',
    required: true
  },
  quantity: {
    type: 'Number',
    required: true,
  }
});

const historySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Item"
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
const Item = mongoose.model('Item', itemSchema);
const History = mongoose.model('History', historySchema);

module.exports = { User, Item, History }