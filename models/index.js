const { Sequelize, DataTypes } = require('sequelize')
const configJson = require('../config.json')
const createStudentModel = require('./student')
//  WILL GO up on level to ensure we locate it to student and config files


// this will look for node_env and find and read its value
// an application running on this program can read the enviorment variable
// at azure we can create varible called node_env and will set it to production
// this call will read it and find value production and then change it to production settings and connect to sql
// we can use default value if there is no node_env set

const env = process.env.NODE_ENV || 'development'

const config = configJson[env]  // this will read the config object for either production or devlopment

const sequelize = new Sequelize(config)

const database = {
    sequelize : sequelize,
    Sequelize : Sequelize,
}

const studentModel = createStudentModel(sequelize, DataTypes)
// this will create student model
const studentModelName = studentModel.name // this will be student name
database[studentModelName] = studentModel
// vue app will make api requests and ask for data and next step is to make data avalible such as students getting add
module.exports = database