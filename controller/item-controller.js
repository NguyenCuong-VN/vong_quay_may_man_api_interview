const { Item } = require("../model/model");
const { findItem } = require("../services/index");

const ItemController = {
  //get list item
  getAll: async (req, res) => {
    try {
      console.log('Go in getAll ItemController');
      const items = await findItem({}, true);
      console.log('Go out getAll ItemController');
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = ItemController;