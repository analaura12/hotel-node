const User = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        cpf: DataTypes.STRING,
        birth_date: DataTypes.DATE,
        cellphone: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING
    });
}

module.exports = User;