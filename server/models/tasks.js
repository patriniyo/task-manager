const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
    'task_manager',
    'patriniyo',
    'Sosisora@12',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
);
const Task = sequelize.define('tasks', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
  
  module.exports = Task;