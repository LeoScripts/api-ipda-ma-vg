const { Model,DataTypes } = require('sequelize');

class User extends Model {
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
            password:{
                type:DataTypes.STRING,
                allowNull:false
            },

        },{
            sequelize,
            tableName:'user'

        });
    }
}

module.exports = User;