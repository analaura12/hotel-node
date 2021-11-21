const Hotel = (sequelize, DataTypes) => {
    return sequelize.define('Hotel', {
        cnpj: DataTypes.STRING,
        company_name: DataTypes.STRING,
        telephone: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        address: DataTypes.STRING,
        district: DataTypes.STRING,
        cep: DataTypes.STRING,
        number: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        country: DataTypes.STRING,
        convenience: DataTypes.STRING,
        avaliation: DataTypes.STRING,
        observation: DataTypes.STRING,
        social_reason: DataTypes.STRING
    });
}

module.exports = Hotel;