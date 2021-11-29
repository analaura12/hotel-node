'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /** Executado quando eu executar a migration*/

        await queryInterface.createTable('reserves', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true
            },
            number: {
                type: Sequelize.INTEGER
            },
            initial_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            final_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            number_of_guests: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            observation: {
                type: Sequelize.STRING,
            },
            status: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            hotel_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'hotels',
                    key: 'id',
                }
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                }
            },
            accommodation_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'accommodation1s',
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

        await queryInterface.dropTable('reserves');
    }
};