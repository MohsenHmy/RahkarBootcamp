// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     fullName: DataTypes.STRING,
//     mobile: DataTypes.STRING,
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/databse") ;

const User = sequelize.define('User', {
  // Model attributes are defined here
  fullName: DataTypes.STRING,
  mobile: DataTypes.STRING,
}, {
  timestamps:true
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
module.exports = User;