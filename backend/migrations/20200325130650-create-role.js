'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roleTitle: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    }).then(()=>{
      queryInterface.bulkInsert('Roles', [
        { roleTitle: 'Admin', desc: "Admin role" },
        { roleTitle: 'Manager', desc: "Manager role" },
        { roleTitle: 'Agent', desc: "Agent role" }
      ], {});
    })
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Roles');
  }
};