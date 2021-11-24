/*
Antigo
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

*/

module.exports = (sequelize, DataTypes) => {
    const Accommodation1 = sequelize.define('Accommodation1', {
        number: DataTypes.STRING,
        value: DataTypes.FLOAT,
        number_of_guests: DataTypes.INTEGER,
        description: DataTypes.STRING,
        convenience: DataTypes.STRING,
        observation: DataTypes.STRING,
        hotel_id: DataTypes.INTEGER
    }, {});
    Accommodation1.associate = function(models) {
        Accommodation1.belongsTo(models.Hotel, { foreignKey: 'hotel_id' })
    }
    return Accommodation1;
}