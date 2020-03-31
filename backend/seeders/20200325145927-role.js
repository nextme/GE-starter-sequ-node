'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
     */
      return queryInterface.bulkInsert('Roles', [
        { roleTitle: 'Admin' ,desc:"Admin role"},
        { roleTitle: 'Manager', desc: "Manager role" },
        { roleTitle: 'Agent', desc: "Agent role" }
        
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      */
      Example:
      return queryInterface.bulkDelete('Roles', null, {});
  }
};
