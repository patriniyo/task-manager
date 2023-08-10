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

const User = sequelize.define("users", {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = User;