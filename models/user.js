// models/User.js
const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
username: { type: DataTypes.STRING, allowNull: false, unique: true },
password: { type: DataTypes.STRING, allowNull: false },
role    : { type: DataTypes.STRING, allowNull: false }
});

User.beforeCreate(async (user, options) => {
user.password = await bcrypt.hash(user.password, 12);
});

User.prototype.comparePassword = function (password) {
return bcrypt.compare(password, this.password);
};

module.exports = User;
