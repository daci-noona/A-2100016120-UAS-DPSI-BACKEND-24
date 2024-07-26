// models/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const Product = sequelize.define('Product', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Product;