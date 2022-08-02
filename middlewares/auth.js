const { User } = require("../model/model");
const { findUser } = require("../services/index")

const validateUser = async (req, res, next) => {
  //extract data
  try {
    const username = req.body?.username;
    const password = req.body?.password;

    if (!username || !password) return res.status(401).json({ message: "Your information is not correct!" });

    //validate data
    const user = await findUser({ username: username, password: password }, false);
    if (user?.length > 0) {
      req.user = user[0];
      return next();
    } else return res.status(401).json({ message: "User is not found!" })
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  validateUser
}