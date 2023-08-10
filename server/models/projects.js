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

const Project = sequelize.define('projects', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  module.exports = Project;