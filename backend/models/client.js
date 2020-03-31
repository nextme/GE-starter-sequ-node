'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    city: DataTypes.STRING,
    total: DataTypes.FLOAT,
    average: DataTypes.FLOAT,
    vip: DataTypes.BOOLEAN
  }, {});
  Client.associate = function(models) {
    // associations can be defined here
  };
  return Client;
};