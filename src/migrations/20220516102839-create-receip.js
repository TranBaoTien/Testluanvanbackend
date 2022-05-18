'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Receips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateimport: {
        type: Sequelize.DATE
      },
      iduser: {
        type: Sequelize.INTEGER
      },
      idpro: {
        type: Sequelize.INTEGER
      },
      namepro: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },
      summoney: {
        type: Sequelize.DOUBLE
      },
      quatity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Receips');
  }
};