
module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: false
            }

        },
        starID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: false
            }
        },
        present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default : false,
            validate: {
                notEmpty: false
            }
        }
// allow null will ensure names that arented and null data to  not be expected.
    })
    // creates an updates table in our database
    Student.sync({force: false} ).then( () => {
        console.log('Synced student table')
        // when app restarts, it would delete and this maybe will help and it will make it if force is false and keep it if there is data
    })
    return Student
}