
module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        name: {
            type: DataTypes.STRING,

        },
        starID: {
            type: DataTypes.STRING,
        },
        present: {
            type: DataTypes.BOOLEAN,
        }

    })
    // creates an updates table in our database
    Student.sync({force: false} ).then( () => {
        console.log('Synced student table')
        // when app restarts, it would delete and this maybe will help and it will make it if force is false and keep it if there is data
    })
    return Student
}