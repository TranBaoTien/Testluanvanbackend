'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Productreviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idoder: {
        type: Sequelize.INTEGER
      },
      iduser: {
        type: Sequelize.INTEGER
      },
      start: {
        type: Sequelize.DOUBLE
      },
      cmt: {
        type: Sequelize.TEXT
      },
      edit: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Productreviews');
  }
};