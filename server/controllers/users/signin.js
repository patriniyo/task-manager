const UserModel = require('../../models/users');
const bcrypt = require("bcryptjs");

const signin = async (req, res) => {
    try {
        console.log("Entered the function")
      const user = await UserModel.findOne({
        where: {
          username: req.body.username,
        },
      });
  
      if (!user) {
        return res.status(404).send({ 
          success: false,
          message: "User Not found." });
      }
  
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
  
      if (!passwordIsValid) {
        return res.status(401).send({
          success: false,
          message: "Invalid Password!",
        });
      }
      return res.status(200).send({
        success: true,
        message: "Signed In Succesfuly!",
      });
    } catch (error) {
        return res.status(500).send({ message: error.message });
      }
    };

module.exports = signin;