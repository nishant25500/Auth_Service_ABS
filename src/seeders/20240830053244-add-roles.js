"use strict";
const { now } = require("../utils/getDateTime"); //helper function

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          name: "ADMIN",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "CUSTOMER",
          createdAt: now,
          updatedAt: now,
        },
        {
          name: "AIRLINE_BUSINESS",
          createdAt: now,
          updatedAt: now,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
