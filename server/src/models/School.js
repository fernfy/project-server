module.exports = (sequelize, DataTypes) => {
    const School = sequelize.define('School', {
        Name: DataTypes.STRING,
        Price: DataTypes.INTEGER,
        Course: DataTypes.STRING,
        Class: DataTypes.STRING,
    })
    return School
}

