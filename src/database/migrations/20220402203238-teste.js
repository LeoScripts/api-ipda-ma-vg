'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('teste', { id: Sequelize.INTEGER });
     
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('teste');

  }
};
