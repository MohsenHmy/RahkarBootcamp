const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/databse") ;

const Book = sequelize.define('Book', {
  // Model attributes are defined here
  name: DataTypes.STRING,
  price: DataTypes.STRING,
  userId: DataTypes.INTEGER
}, {
  timestamps:true
});

// `sequelize.define` also returns the model
console.log(Book === sequelize.models.Book); // true
module.exports = Book;