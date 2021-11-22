'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /** Add seed commands here.*/

        await queryInterface.bulkInsert('hotels', [{
            cnpj: '00.000.000/0000-00',
            company_name: 'Admin',
            telephone: '12900000000',
            email: 'admin@admin.com',
            password: 'admin123',
            address: 'sem endereço',
            district: 'sem bairro',
            cep: '00000000',
            number: '1001',
            city: 'sem cidade',
            state: 'sem estado',
            country: 'sem país'

        }], {});

    },

    down: async(queryInterface, Sequelize) => {
        /** Add commands to revert seed here.*/

        await queryInterface.bulkDelete('hotels', null, {});

    }
};