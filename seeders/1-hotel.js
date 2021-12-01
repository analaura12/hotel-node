'use strict';

const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /** Add seed commands here.*/

        await queryInterface.bulkInsert('hotels', [{
                cnpj: '00.000.000/0000-00',
                company_name: 'Admin',
                telephone: '12900000000',
                email: 'admin@admin',
                password: await bcrypt.hash('admin123', saltRounds),
                address: 'sem endereço',
                district: 'sem bairro',
                cep: '00000000',
                number: '1001',
                city: 'sem cidade',
                state: 'sem estado',
                country: 'sem país',
                photo: 'admin.jpg'
            },
            {
                cnpj: '60.342.425/0001-00',
                company_name: 'Grand Hyatt São Paulo',
                telephone: '1128381234',
                email: 'teste@teste',
                password: await bcrypt.hash('admin123', saltRounds),
                address: 'Av. das Nações Unidas',
                district: 'Itaim Bibi',
                cep: '04578000',
                number: '13301',
                city: 'São Paulo',
                state: 'SP',
                country: 'Brasil',
                photo: 'hyatt.jpg'
            },
            {
                cnpj: '64.089.824/0003-24',
                company_name: 'Renaissance Sao Paulo Hotel',
                telephone: '1130692233',
                email: 'admin@teste',
                password: 'admin123',
                address: 'Alameda Santos',
                district: 'Jardim Paulista',
                cep: '01419002',
                number: '2233',
                city: 'São Paulo',
                state: 'SP',
                country: 'Brasil',
                photo: 'renaissance.jpg'

            }
        ], {});

    },

    down: async(queryInterface, Sequelize) => {
        /** Add commands to revert seed here.*/

        await queryInterface.bulkDelete('hotels', null, {});

    }
};