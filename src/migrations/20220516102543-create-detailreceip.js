'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Detailreceips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quatityin: {
        type: Sequelize.INTEGER
      },
      quatityout: {
        type: Sequelize.INTEGER
      },
      quatityton: {
        type: Sequelize.INTEGER
      },
      idpro: {
        type: Sequelize.INTEGER
      },
      idreceip: {
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
    await queryInterface.dropTable('Detailreceips');
  }
};