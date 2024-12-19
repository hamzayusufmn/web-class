const express = require('express')

const database = require('../models') // this will look for index js from models

const Student = database.Student
//

const router = express.Router()


router.get('/students', function (req, res, next) {
    Student.findAll({order: ['name']} ).then ( students => {
        return res.json(students)
    })
})

router.post('/students', function (req, res, next) {
    const newStudent = req.body
console.log(req.body)
    console.log(newStudent)
    Student.create(newStudent).then(result => {
        return res.status(201).send('new student created!')
    }).catch(err => {
        if (err instanceof database.Sequelize.ValidationError) {
            const messages = err.errors.map ( e => e.message)
            return res.status(400).json(messages)
        } else {
            next(err)

            /// validation error is what we saw on terminal and this will shpw user whats wrong to help with thier issue
        }
        // our server would crash and this update will push out 400 code which is bad request
    })
    // status codes tell you if things are working ex. 404 cant be found 201 means its working
})

router.patch('/students/:id', function (req, res, next) {
    // this id number ill match request and store into req  params and id value will be stored
    // this will store any placeholder
    const StudentID = req.params.id
    const updatedStudent = req.body
    Student.update(updatedStudent, {where: {id: StudentID}}).then((result) => {

        const rowModified = result[0]   // if one row was chnaged that means student was found and changed

        if (rowModified === 1) {
            res.send('ok')
        } else {
            return res.status(404).send('student not found')
        }
        // if we send it to 2 and this new data will be update student and will find row for student to be updated
    }).catch(err => {

        if (err instanceof database.Sequelize.ValidationError) {
            const messages = err.errors.map(e => e.message)
            return res.status(400).json(messages)
        } else {
            next(err)

        }
    })
// if we use id for student called 3000 it worked and we will create handle erroring for this
})

router.delete('/students/:id', function (req, res, next){
    const studentID = req.params.id
    Student.destroy({where: {id: studentID}}).then( (rowsDeleted) => {
        if (rowsDeleted === 1) {
            return res.send('student deleted')
        } else {
        return res.send('student not found')
        } }
    )
})

    module.exports = router
// make sure to know difference between exports and export

// make sure no }) is in behind module exports