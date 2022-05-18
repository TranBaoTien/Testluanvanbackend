'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //create user
    return queryInterface.bulkInsert('User', [{
      name: 'Tien',
      username: 'baobao',
      password:'12345',
      email: 'bao@gmail.com',
      idtype:3
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
