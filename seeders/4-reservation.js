'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /** Add seed commands here.*/

        await queryInterface.bulkInsert('reserves', [{
                number: '10',
                initial_date: '2021-12-10',
                final_date: '2021-12-20',
                number_of_guests: 2,
                status: 'Aprovada',
                hotel_id: 2,
                user_id: 1,
                accommodation_id: 1
            },
            {
                number: '20',
                initial_date: '2021-12-22',
                final_date: '2021-12-24',
                number_of_guests: 2,
                status: 'Aprovada',
                hotel_id: 2,
                user_id: 2,
                accommodation_id: 1
            },
            {
                number: '30',
                initial_date: '2021-12-24',
                final_date: '2021-12-30',
                number_of_guests: 2,
                status: 'Pendente',
                hotel_id: 3,
                user_id: 2,
                accommodation_id: 2
            },
        ], {});

    },

    down: async(queryInterface, Sequelize) => {
        /** Add commands to revert seed here.*/

        await queryInterface.bulkDelete('reserves', null, {});

    }
};