'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /** Add seed commands here.*/

        await queryInterface.bulkInsert('accommodation1s', [{
                number: '01A',
                value: 1000.00,
                number_of_guests: 2,
                hotel_id: 2,
                photo: 'hyatt-quarto.jpg',
                description: 'Diplomatic Suite'
            },
            {
                number: '1100B',
                value: 950.00,
                number_of_guests: 2,
                hotel_id: 3,
                photo: 'renaissance-quarto.jpg',
                description: 'Quarto no 10º andar'
            },
        ], {});

    },

    down: async(queryInterface, Sequelize) => {
        /** Add commands to revert seed here.*/

        await queryInterface.bulkDelete('accommodation1s', null, {});

    }
};