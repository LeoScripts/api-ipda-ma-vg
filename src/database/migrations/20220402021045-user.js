'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tel: {
        type: Sequelize.STRING,
        allowNull: false
      },
      msg: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('user');

  }
};
