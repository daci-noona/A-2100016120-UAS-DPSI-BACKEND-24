const User = require('./models/user');
const Product = require('./models/product');


User.hasMany(Product, { foreignKey: 'idUser' });
Product.belongsTo(User, { foreignKey: 'idUser' });

module.exports = { User, Product };