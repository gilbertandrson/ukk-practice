'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transaksis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      OutletId: {
        type: Sequelize.INTEGER
      },
      kode_invoice: {
        type: Sequelize.STRING
      },
      MemberId: {
        type: Sequelize.INTEGER
      },
      tanggal: {
        type: Sequelize.DATE
      },
      batas_waktu: {
        type: Sequelize.DATE
      },
      tanggal_bayar: {
        type: Sequelize.DATE
      },
      biaya_tambahan: {
        type: Sequelize.INTEGER
      },
      diskon: {
        type: Sequelize.DOUBLE
      },
      pajak: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      dibayar: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transaksis');
  }
};