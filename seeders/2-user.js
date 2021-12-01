'use strict';

const bcrypt = require('bcrypt');
const saltRounds = 10;

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
                state: 'SP',
                password: await bcrypt.hash('admin123', saltRounds),
                email: 'admin@admin'
            },
            {
                first_name: 'Bruna',
                last_name: 'Lima',
                cpf: '43350959800',
                birth_date: '2001-10-03',
                cellphone: '1299538379',
                city: 'São José dos Campos',
                state: 'SP',
                password: await bcrypt.hash('admin123', saltRounds),
                email: 'teste@teste'
            },
        ], {});

    },

    down: async(queryInterface, Sequelize) => {
        /** Add commands to revert seed here.*/

        await queryInterface.bulkDelete('users', null, {});

    }
};