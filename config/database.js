const { Sequelize } = require('sequelize');
const {mysql2} = require('mysql2');

const sequelize = new Sequelize(
  "sql12722340",
  "sql12722340",
  "A45NnjiRP2",
  {
    dialect: 'mysql',
    dialectModule: mysql2, // Needed to fix sequelize issues with WebPack
    host: "sql12.freesqldatabase.com",
  }
)

module.exports = sequelize;