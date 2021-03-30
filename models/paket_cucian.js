'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paket_cucian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  paket_cucian.init({
    jenis_kain: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    berat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'paket_cucian',
  });
  return paket_cucian;
};