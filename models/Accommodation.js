const Accommodation1 = (sequelize, DataTypes) => {
    return sequelize.define('Accommodation1', {
        number: DataTypes.STRING,
        value: DataTypes.FLOAT,
        number_of_guests: DataTypes.INTEGER,
        description: DataTypes.STRING,
        convenience: DataTypes.STRING,
        observation: DataTypes.STRING,
        hotel_id: DataTypes.INTEGER,
    });
}

module.exports = Accommodation1;