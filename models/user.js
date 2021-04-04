'use strict';
const bcrypt = require('bcryptjs')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    nama: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
    OutletId: DataTypes.INTEGER,
    role: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate: (user,options) =>{
        try {
          const salt = bcrypt.genSaltSync(10)
          console.log(salt)
          user.password = bcrypt.hashSync(user.password,salt)
        } catch (err) {
          console.log(err)
        }
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};