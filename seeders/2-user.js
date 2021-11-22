'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /** Add seed commands here.*/

        await queryInterface.bulkInsert('users', [{
            first_name: 'User',
            last_name: 'Admin',
            cpf: '00000000000',
            birth_date: '2000-10-10',
            cellphone: '12900000000',
            city: 'sem cidade',
            state: 'sem estado',
            password: 'admin123',
            email: 'admin@admin.com'
        }], {});

    },

    down: async(queryInterface, Sequelize) => {
        /** Add commands to revert seed here.*/

        await queryInterface.bulkDelete('users', null, {});

    }
};