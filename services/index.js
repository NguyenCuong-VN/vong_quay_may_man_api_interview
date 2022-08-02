//contain all service - should be split them

const { Item, History, User } = require("../model/model");
const { formatItems, formatUsers } = require("./formater")

const findItem = async (query, isFormat = false) => {
  return new Promise((resolve, reject) => {
    Item.find(query, (err, items) => {
      if (err) reject(err);

      resolve(isFormat ? formatItems(items) : items);
    });
  })
}

const findUser = async (query, isFormat = true) => {
  return new Promise((resolve, reject) => {
    User.find(query, (err, users) => {
      if (err) reject(err);
      resolve(isFormat ? formatUsers(users) : users);
    });
  })
}

const findHistory = async (query, isGetDetail = false) => {
  return new Promise((resolve, reject) => {
    History.find(query, async (err, histories) => {
      if (err) reject(err);

      const result = [];
      if (histories?.length > 0 && isGetDetail) {
        const afterFormat = {};
        for (const history of histories) {
          afterFormat.id = history["_id"];
          afterFormat.userData = (await findUser({ "_id": history.user }))?.[0] || history.user;
          afterFormat.itemData = (await findItem({ "_id": history.item }, true))?.[0] || history.item;
          afterFormat.create_time = history.createdAt;
          result.push(afterFormat);
        }
      }

      resolve(result.length > 0 ? result : histories);
    });
  })
}

module.exports = { findItem, findHistory, findUser }