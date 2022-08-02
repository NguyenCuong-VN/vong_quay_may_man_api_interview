const { User, Item, History } = require("../model/model");
const { findItem } = require("../services/index");

const UserController = {

  rotate: async (req, res) => {
    try {
      //get all item remain qty & has rate
      const items = await findItem({ quantity: { $gte: 1 }, rate: { $gt: 0 } }, true);
      if (items.length === 0) throw new Error("No items found");

      //handle logic rotate -----
      // - make rate specific
      const itemToValue = [];
      let counter = 0;
      items.forEach(item => {
        itemToValue.push(counter);
        counter += item.rate
      });
      if (counter === 0) throw new Error("No items rate");   // if counter is zero -> no item rate -> cannot rotate successfully

      //create random number aka rotating
      const rotated = Math.random() * counter;

      //find item result 
      let result = null;
      for (let index = itemToValue.length - 1; index >= 0; index--) {
        if (rotated > itemToValue[index]) {
          result = items[index];
          break;
        }
      }

      if (!result || !result["id"]) throw new Error("Something was wrong!");

      //update quantity item
      await Item.findOneAndUpdate({ "_id": result.id }, { quantity: result.quantity - 1 }).exec();

      //create history
      const newHistory = new History({ user: req.user?.["_doc"]?.["_id"], item: result.id });
      await newHistory.save();

      return res.status(200).send(result?.name)

    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UserController;