const Sequelize = require("sequelize");

const sequelize = new Sequelize(
   'task_manager',
   'patriniyo',
   'Sosisora@12',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );

  module.exports = sequelize;