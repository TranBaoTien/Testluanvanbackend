'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: true,
        type: Sequelize.DOUBLE
      },
      detail: {
        allowNull: true,
        type: Sequelize.STRING
      },
      screen: {
        allowNull: true,
        type: Sequelize.STRING
      },
      chi: {
        allowNull: true,
        type: Sequelize.STRING
      },
      ram: {
        allowNull: true,
        type: Sequelize.STRING
      },
      rom: {
        allowNull: true,
        type: Sequelize.STRING
      },
      camsau: {
        allowNull: true,
        type: Sequelize.STRING
      },
      camtruoc: {
        allowNull: true,
        type: Sequelize.STRING
      },
      pin: {
        allowNull: true,
        type: Sequelize.STRING
      },
      dophangiai: {
        allowNull: true,
        type: Sequelize.STRING
      },
      hedieuhanh: {
        allowNull: true,
        type: Sequelize.STRING
      },
      bonho: {
        allowNull: true,
        type: Sequelize.STRING
      },
      sim: {
        allowNull: true,
        type: Sequelize.STRING
      },
      mang: {
        allowNull: true,
        type: Sequelize.STRING
      },
      congsac: {
        allowNull: true,
        type: Sequelize.STRING
      },
      size: {
        allowNull: true,
        type: Sequelize.STRING
      },
      weigth: {
        allowNull: true,
        type: Sequelize.STRING
      },
      idth: {
        type: Sequelize.INTEGER
      },
      idtype: {
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
    await queryInterface.dropTable('Products');
  }
};