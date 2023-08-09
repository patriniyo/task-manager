const UserModel = require('../models/users');

checkDuplicateUsername = async (req, res, next) => {
    try {

      let user = await UserModel.findOne({
        where: {
          username: req.body.username
        }
      });
  
      if (user) {
        return res.status(400).send({
          message: "Failed! Username is already in use!"
        });
      }

      next();

    } catch (error) {
      return res.status(500).send({
        message: "Unable to validate Username!"
      });
    }
  };

  module.exports = checkDuplicateUsername;