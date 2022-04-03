const { Model,DataTypes } = require('sequelize');

class UserModel extends Model {
    static init(sequelize){
        super.init({
            id:{
                type:DataTypes.STRING,
                primaryKey:true,
                allowNull:false
            },
            name:{
                type:DataTypes.STRING,
                allowNull:false
            },
            email:{
                type:DataTypes.STRING,
                allowNull:false
            },
            tel:{
                type:DataTypes.STRING,
                allowNull:false
            },
            msg:{
                type:DataTypes.STRING,
                allowNull:false
            },

        },{
            sequelize,
            tableName:'user'

        });
    }
}

module.exports = UserModel;