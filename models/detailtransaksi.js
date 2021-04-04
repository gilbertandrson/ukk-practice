'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailTransaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DetailTransaksi.init({
    TransaksiId: DataTypes.INTEGER,
    PaketId: DataTypes.INTEGER,
    Qty: DataTypes.DOUBLE,
    keterangan: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'DetailTransaksi',
  });
  return DetailTransaksi;
};