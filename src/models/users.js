"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.Tasks, {
                foreignKey: 'userId'
            });
        }
    }
    Users.init(
        {
            userName: { type: DataTypes.STRING, unique: true, allowNull: false },
        },
        {
            sequelize,
            modelName: "Users",
        }
    );
    return Users;
};
