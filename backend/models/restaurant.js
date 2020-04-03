'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    phone: DataTypes.STRING,
    title: DataTypes.STRING,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  Restaurant.associate = function(models) {
    // associations can be defined here
  };
  return Restaurant;
};