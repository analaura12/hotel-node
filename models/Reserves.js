const Reserve = (sequelize, DataTypes) => {
    return sequelize.define('Reserve', {
        number: DataTypes.INTEGER,
        initial_date: DataTypes.DATE,
        final_date: DataTypes.DATE,
        number_of_guests: DataTypes.INTEGER,
        observation: DataTypes.STRING,
        status: DataTypes.STRING,
        hotel_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        accommodation_id: DataTypes.INTEGER
    });
}

module.exports = Reserve;