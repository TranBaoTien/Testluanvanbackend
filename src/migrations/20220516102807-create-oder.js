'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Oders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      iduser: {
        type: Sequelize.INTEGER
      },
      note: {
        type: Sequelize.TEXT
      },
      idpay: {
        type: Sequelize.INTEGER
      },
      idvoucher: {
        type: Sequelize.INTEGER
      },
      idstatus: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Oders');
  }
};