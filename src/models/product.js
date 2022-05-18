'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    name: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    detail: DataTypes.STRING,
    screen: DataTypes.STRING,
    chi: DataTypes.STRING,
    ram: DataTypes.STRING,
    rom: DataTypes.STRING,
    camsau: DataTypes.STRING,
    camtruoc: DataTypes.STRING,
    pin: DataTypes.STRING,
    dophangiai: DataTypes.STRING,
    hedieuhanh: DataTypes.STRING,
    bonho: DataTypes.STRING,
    sim: DataTypes.STRING,
    mang: DataTypes.STRING,
    congsac: DataTypes.STRING,
    size: DataTypes.STRING,
    weigth: DataTypes.STRING,
    idth: DataTypes.INTEGER,
    idtype: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};