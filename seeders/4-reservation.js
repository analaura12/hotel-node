'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /** Add seed commands here.*/

        await queryInterface.bulkInsert('reserves', [{
            number: '20',
            initial_date: '2021-12-10',
            final_date: '2021-12-20',
            number_of_guests: 2,
            status: 'Aprovada',
            hotel_id: 1,
            user_id: 1,
            accommodation_id: 1
        }], {});

    },

    down: async(queryInterface, Sequelize) => {
        /** Add commands to revert seed here.*/

        await queryInterface.bulkDelete('reserves', null, {});

    }
};