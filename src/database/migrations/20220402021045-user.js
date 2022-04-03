'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('user', {
       id: Sequelize.STRING,
       name: Sequelize.STRING,
       email: Sequelize.STRING,
       tel: Sequelize.STRING,
       msg: Sequelize.STRING,
      });
     
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('user');
    
  }
};
