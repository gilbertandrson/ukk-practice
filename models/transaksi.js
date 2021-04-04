'use strict';
const bcrypt = require('bcryptjs')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transaksi.init({
    OutletId: DataTypes.INTEGER,
    kode_invoice: DataTypes.STRING,
    MemberId: DataTypes.INTEGER,
    tanggal: DataTypes.DATE,
    batas_waktu: DataTypes.DATE,
    tanggal_bayar: DataTypes.DATE,
    biaya_tambahan: DataTypes.INTEGER,
    diskon: DataTypes.DOUBLE,
    pajak: DataTypes.INTEGER,
    status: DataTypes.STRING,
    dibayar: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaksi',
  });
  return Transaksi;
};