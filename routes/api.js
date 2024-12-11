const express = require('express')

const database = require('../models') // this will look for index js from models

const Student = database.Student
//

const router = express.Router()


router.get('/students', function (req, res, next) {
    Student.findAll().then ( students => {
        return res.json(students)
    })
})

router.post('/students', function (req, res, next) {
    const newStudent = req.body
console.log(req.body)
    Student.create(newStudent).then(result => {
        return res.status(201).send('new student created!')
    })
    // status codes tell you if things are working ex. 404 cant be found 201 means its working
})



module.exports = router
// make sure to know difference between exports and export