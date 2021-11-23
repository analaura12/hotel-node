'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /** Executado quando eu executar a migration*/

        await queryInterface.createTable('accommodation1s', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true
            },
            number: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            value: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            number_of_guests: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING
            },
            convenience: {
                type: Sequelize.STRING
            },
            observation: {
                type: Sequelize.STRING
            },
            hotel_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'hotels',
                    key: 'id',
                }
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

        await queryInterface.dropTable('accommodation1s');
    }
};