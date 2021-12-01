'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /** Executado quando eu executar a migration*/

        await queryInterface.createTable('hotels', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true
            },
            cnpj: {
                type: Sequelize.STRING(45),
                allowNull: false,
                unique: true
            },
            company_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            telephone: {
                type: Sequelize.STRING(11),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            address: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            district: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cep: {
                type: Sequelize.STRING(8),
                allowNull: false,
            },
            number: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            state: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            country: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            convenience: {
                type: Sequelize.STRING
            },
            avaliation: {
                type: Sequelize.STRING
            },
            observation: {
                type: Sequelize.STRING
            },
            social_reason: {
                type: Sequelize.STRING
            },
            photo: {
                type: Sequelize.STRING
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW')
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW')
            }
        });
    },

    down: async(queryInterface, Sequelize) => {
        /** Executado quando eu desfizer a migration*/

        await queryInterface.dropTable('hotels');
    }
};