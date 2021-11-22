'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /** Add seed commands here.*/

        await queryInterface.bulkInsert('accommodation1s', [{
            number: '01A',
            value: 150.00,
            number_of_guests: 2,
            hotel_id: 1
        }], {});

    },

    down: async(queryInterface, Sequelize) => {
        /** Add commands to revert seed here.*/

        await queryInterface.bulkDelete('accommodation1s', null, {});

    }
};