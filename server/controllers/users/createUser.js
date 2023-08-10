const UserModel = require('../../models/users');
const bcrypt = require("bcryptjs");

const createUser = (req, res) => {
  // Call the create function on the Book model, and pass the data that you receive.

  const { username,password,firstname,lastname } = req.body;

  UserModel.create({
      username,
      password : bcrypt.hashSync(req.body.password, 8),
      firstname,
      lastname
  })
  .then((result) => {
      return res.json({
        success: true,
          message: "User created successfully!",
      });
  })
  .catch((error) => {
      console.log(error);
      return res.json({
        success: false,
          message: "User to create a record!",
      });
  });
};

module.exports = createUser;