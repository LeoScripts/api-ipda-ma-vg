const Sequelize = require('sequelize');
const dbConfig = require('./config/database');
const UserModel = require('./model/UserModel');

const conection = new Sequelize(dbConfig);

UserModel.init(conection);

module.exports = conection;