const { History } = require("../model/model");
const { findHistory } = require("../services/index")

const HistoryController = {
  //get historical data
  getAll: async (req, res) => {
    try {
      const histories = await findHistory({}, true);
      return res.status(200).json(histories);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = HistoryController;