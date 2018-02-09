module.exports = (sequelize , DataType) => {
    return sequelize.define("task",{
        title:{
            type: DataType.STRING(45),
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        text:{
            type: DataType.TEXT('tiny'),
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        deadline:{
            type: DataType.DATEONLY,
            allowNull: false,
            validate:{
                isDate: true,
                notEmpty: true
            }
        }
    });
};